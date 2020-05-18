const OnValidateInputObserver = require('.')

class OnValidateInputObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')
    return new OnValidateInputObserver(store)
  }
}

module.exports = OnValidateInputObserverLocator
