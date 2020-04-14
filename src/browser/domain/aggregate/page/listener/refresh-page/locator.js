const RefreshPageObserver = require('.')

class RefreshPageObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page  = this.locator.locate('core/page')
    return new RefreshPageObserver(page)
  }
}

module.exports = RefreshPageObserverLocator
