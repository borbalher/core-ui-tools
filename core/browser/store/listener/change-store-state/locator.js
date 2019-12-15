const ChangeStoreStateObserver = require('.')

class ChangeStoreStateObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const locator = this.locator
    return new ChangeStoreStateObserver(locator)
  }
}

module.exports = ChangeStoreStateObserverLocator
