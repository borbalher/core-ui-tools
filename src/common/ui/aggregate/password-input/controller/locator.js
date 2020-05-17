const PasswordInputController = require('.')

class PasswordInputControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return PasswordInputController
  }
}

module.exports = PasswordInputControllerLocator
