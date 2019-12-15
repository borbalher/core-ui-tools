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
    bus       = this.locator.locate('core/bus')

    return new Store(deepclone, bus)
  }
}

module.exports = StoreLocator
