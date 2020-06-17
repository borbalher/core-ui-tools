const OpenModalAction = require('.')

class OpenModalActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')
    return new OpenModalAction(store)
  }
}

module.exports = OpenModalActionLocator
