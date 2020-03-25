const UnblockPageObserver = require('.')

class UnblockPageObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const pageBlocker = this.locator.locate('ui/page-blocker')
    return new UnblockPageObserver(pageBlocker)
  }
}

module.exports = UnblockPageObserverLocator
