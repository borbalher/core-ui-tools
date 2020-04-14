const BlockPageObserver = require('.')

class BlockPageObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const pageBlocker = this.locator.locate('ui/page-blocker')
    return new BlockPageObserver(pageBlocker)
  }
}

module.exports = BlockPageObserverLocator
