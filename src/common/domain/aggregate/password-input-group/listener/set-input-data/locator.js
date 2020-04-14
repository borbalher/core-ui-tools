const SetInputDataObserver = require('.')

class SetInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const passwordInputGroup = this.locator.locate('ui/password-input-group')
    return new SetInputDataObserver(passwordInputGroup)
  }
}

module.exports = SetInputDataObserverLocator
