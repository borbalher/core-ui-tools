const FetchStateObserverObserver = require('.')

class FetchStateObserverObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')
    return new FetchStateObserverObserver(store)
  }
}

module.exports = FetchStateObserverObserverLocator
