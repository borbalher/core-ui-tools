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
    configuration      = this.locator.locate('core/configuration').find('ui.store'),
    state              = configuration.state   || {},
    options            = configuration.options || {},
    channel            = this.createBusChannel(),
    chain              = this.getMiddlewareChain(configuration),
    reducer            = this.locator.locate('core/reducer'),
    deepfind           = this.locator.locate('core/deepfind'),
    deepmerge          = this.locator.locate('core/deepmerge'),
    { entities = {} }  = state,
    eventComposer      = this.locator.locate('core/event/composer'),
    entitySet          = this.locator.locate('core/entity-set/factory').create(entities)

    return new Store({
      locator     : this.locator,
      middlewares : chain,
      eventComposer,
      deepmerge,
      entitySet,
      deepfind,
      reducer,
      channel,
      options,
      state
    })
  }
}

module.exports = StoreLocator
