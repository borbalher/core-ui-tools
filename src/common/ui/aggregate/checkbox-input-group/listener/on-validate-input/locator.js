const OnOnValidateInputObserver = require('.')

class OnOnValidateInputObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnOnValidateInputObserver(ui)
  }
}

module.exports = OnOnValidateInputObserverLocator
