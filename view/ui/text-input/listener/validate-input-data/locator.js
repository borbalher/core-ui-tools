const ValidateInputDataObserver = require('.')

class ValidateInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const textInput = this.locator.locate('ui/text-input')
    return new ValidateInputDataObserver(textInput)
  }
}

module.exports = ValidateInputDataObserverLocator
