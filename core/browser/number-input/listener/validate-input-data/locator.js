const ValidateInputDataObserver = require('.')

class ValidateInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const numberInput = this.locator.locate('ui/number-input')
    return new ValidateInputDataObserver(numberInput)
  }
}

module.exports = ValidateInputDataObserverLocator
