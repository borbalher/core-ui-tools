const PasswordInputGroupController = require('.')

class PasswordInputGroupControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return PasswordInputGroupController
  }
}

module.exports = PasswordInputGroupControllerLocator
