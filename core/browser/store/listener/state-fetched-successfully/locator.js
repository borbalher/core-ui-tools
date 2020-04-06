const StateFetchedSuccessfullyObserverObserver = require('core-ui-tools/core/browser/store/listener/state-fetched-successfully')

class StateFetchedSuccessfullyObserverObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')
    return new StateFetchedSuccessfullyObserverObserver(store)
  }
}

module.exports = StateFetchedSuccessfullyObserverObserverLocator
