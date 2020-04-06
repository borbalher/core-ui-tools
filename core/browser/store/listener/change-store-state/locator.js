const ChangeStoreStateObserver = require('.')

class ChangeStoreStateObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')
    return new ChangeStoreStateObserver(store)
  }
}

module.exports = ChangeStoreStateObserverLocator
