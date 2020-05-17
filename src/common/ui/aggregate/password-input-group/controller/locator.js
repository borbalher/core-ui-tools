const PasswordInputGroupComponent = require('.')

class PasswordInputGroupComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return PasswordInputGroupComponent
  }
}

module.exports = PasswordInputGroupComponentLocator
