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
    deepclone = this.locator.locate('core/deepclone'),
    bus       = this.locator.locate('core/bus'),
    channel   = bus.createChannel('store')

    return new Store(deepclone, channel, middlewares, reducer, locator)
  }
}

module.exports = StoreLocator
