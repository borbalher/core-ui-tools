const SetInputDataObserver = require('.')

class SetInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const passwordInput = this.locator.locate('ui/password-input')
    return new SetInputDataObserver(passwordInput)
  }
}

module.exports = SetInputDataObserverLocator
