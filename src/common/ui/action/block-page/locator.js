const BlockPageAction = require('.')

class BlockPageActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')
    return new BlockPageAction(store)
  }
}

module.exports = BlockPageActionLocator
