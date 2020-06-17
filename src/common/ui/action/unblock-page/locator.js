const UnblockPageAction = require('.')

class UnblockPageActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')
    return new UnblockPageAction(store)
  }
}

module.exports = UnblockPageActionLocator
