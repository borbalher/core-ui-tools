const InputDataValidatedObserver = require('.')

class InputDataValidatedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const passwordInputGroup = this.locator.locate('ui/password-input-group')
    return new InputDataValidatedObserver(passwordInputGroup)
  }
}

module.exports = InputDataValidatedObserverLocator
