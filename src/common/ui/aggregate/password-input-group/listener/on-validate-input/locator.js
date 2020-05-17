const OnValidateInputObserver = require('.')

class OnValidateInputObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnValidateInputObserver(ui)
  }
}

module.exports = OnValidateInputObserverLocator
