const ValidateInputDataObserver = require('.')

class ValidateInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const buttonGroupInput = this.locator.locate('ui/button-group-input')
    return new ValidateInputDataObserver(buttonGroupInput)
  }
}

module.exports = ValidateInputDataObserverLocator
