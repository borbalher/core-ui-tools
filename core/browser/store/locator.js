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
    bus           = this.locator.locate('core/bus'),
    channel       = bus.createChannel('store')

    return new Store(deepclone, channel, undefined, undefined, this.locator)
  }
}

module.exports = StoreLocator
