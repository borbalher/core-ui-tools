const LoadStateObserver = require('.')

class LoadStateObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store       = this.locator.locate('core/store'),
    repository  = this.locator.locate('infrastructure/sys02-rebuild/repository')

    return new LoadStateObserver(store, repository)
  }
}

module.exports = LoadStateObserverLocator
