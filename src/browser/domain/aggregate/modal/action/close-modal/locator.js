const CloseModalAction = require('.')

class CloseModalActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')
    return new CloseModalAction(store)
  }
}

module.exports = CloseModalActionLocator
