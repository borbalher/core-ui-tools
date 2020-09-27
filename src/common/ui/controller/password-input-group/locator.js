const PasswordInputGroup = require('.')

class PasswordInputGroupLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return PasswordInputGroup
  }
}

module.exports = PasswordInputGroupLocator
