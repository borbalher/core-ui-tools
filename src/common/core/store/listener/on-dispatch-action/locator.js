const DispatchObserver = require('.')

class DispatchObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')
    return new DispatchObserver(store)
  }
}

module.exports = DispatchObserverLocator
