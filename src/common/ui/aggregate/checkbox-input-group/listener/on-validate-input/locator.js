const OnValidateInputObserver = require('.')

class OnValidateInputObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page = this.locator.locate('core/page')
    return new OnValidateInputObserver(page)
  }
}

module.exports = OnValidateInputObserverLocator
