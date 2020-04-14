const InputDataSettedObserver = require('.')

class InputDataSettedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const passwordInputGroup = this.locator.locate('ui/password-input-group')
    return new InputDataSettedObserver(passwordInputGroup)
  }
}

module.exports = InputDataSettedObserverLocator
