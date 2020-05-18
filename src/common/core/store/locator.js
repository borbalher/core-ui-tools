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
        return this.locator.locate(middleware).middleware()
      }).reverse()
    }
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration').find('core.store'),
    state         = configuration.state ? configuration.state : {},
    channel       = this.createBusChannel(),
    chain         = this.getMiddlewareChain(configuration),
    reducer       = this.locator.locate('core/reducer'),
    deepfind      = this.locator.locate('core/deepfind'),
    deepmerge     = this.locator.locate('core/deepmerge'),
    normalizer    = this.locator.locate('core/normalizer')

    return new Store(state, channel, chain, reducer, deepfind, deepmerge, normalizer, this.locator)
  }
}

module.exports = StoreLocator
