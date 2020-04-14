const FetchStateObserver = require('.')

class FetchStateObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store      = this.locator.locate('core/store'),
    repository = this.locator.locate('infrastructure/ui/repository')

    return new FetchStateObserver(store, repository)
  }
}

module.exports = FetchStateObserverLocator
