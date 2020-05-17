const OnValidateInputDataObserver = require('.')

class OnValidateInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnValidateInputDataObserver(ui)
  }
}

module.exports = OnValidateInputDataObserverLocator
