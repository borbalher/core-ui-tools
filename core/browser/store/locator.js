const Store = require('.')

class StoreLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  getInitialState()
  {
    const
    localStorage  = this.locator.locate('core/local-storage'),
    initialState  = localStorage.getItem('initial-state')
    return initialState
  }

  createBusChannel()
  {
    const
    bus     = this.locator.locate('core/bus'),
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

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration').find('core.store'),
    initialState  = this.getInitialState(),
    channel       = this.createBusChannel(),
    chain         = this.getMiddlewareChain(configuration),
    reducer       = this.locator.locate('core/reducer')

    return new Store(initialState, channel, chain, reducer)
  }
}

module.exports = StoreLocator
