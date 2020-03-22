const ValidateInputDataObserver = require('.')

class ValidateInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const passwordInput = this.locator.locate('ui/password-input')
    return new ValidateInputDataObserver(passwordInput)
  }
}

module.exports = ValidateInputDataObserverLocator
