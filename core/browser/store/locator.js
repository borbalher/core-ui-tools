const Store = require('.')

class StoreLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    deepclone     = this.locator.locate('core/deepclone'),
    configuration = this.locator.locate('core/configuration'),
    reducer       = this.locator.locate('core/reducer'),
    middlewares   = configuration.find('core.store.middlewares'),
    bus           = this.locator.locate('core/bus'),
    repository    = this.locator.locate('infrastructure/ui/repository'),
    channel       = bus.createChannel('store'),
    composer      = this.locator.locate('core/schema/composer')

    return new Store(deepclone, channel, middlewares, reducer, this.locator, repository, composer)
  }
}

module.exports = StoreLocator
