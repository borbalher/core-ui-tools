const ValidateInputDataObserver = require('.')

class ValidateInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const textInputGroup = this.locator.locate('ui/text-input-group')
    return new ValidateInputDataObserver(textInputGroup)
  }
}

module.exports = ValidateInputDataObserverLocator
