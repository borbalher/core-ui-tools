const PasswordInputComponent = require('.')

class PasswordInputComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return PasswordInputComponent
  }
}

module.exports = PasswordInputComponentLocator
