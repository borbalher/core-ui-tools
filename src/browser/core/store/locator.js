const Store = require('.')

class StoreLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  createBusChannel()
  {
    const
    bus     = this.locator.locate('infrastructure/bus'),
    channel = bus.createChannel('store')

    return channel
  }

  getMiddlewareChain({ middlewares })
  {
    if(middlewares)
    {
      return middlewares.map((middleware) =>
      {
        return this.locator.locate(middleware)
      }).reverse()
    }
  }

  getInitialState()
  {
    const
    localStorage  = this.locator.locate('infrastructure/local-storage/gateway'),
    initialState  = localStorage.getItem('initial-state')
    return JSON.parse(initialState)
  }


  locate()
  {
    const
    state         = this.getInitialState(),
    configuration = this.locator.locate('core/configuration').find('core.store'),
    channel       = this.createBusChannel(),
    chain         = this.getMiddlewareChain(configuration),
    reducer       = this.locator.locate('core/reducer')

    return new Store(state, channel, chain, reducer)
  }
}

module.exports = StoreLocator
