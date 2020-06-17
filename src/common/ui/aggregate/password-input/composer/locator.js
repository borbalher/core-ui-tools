const PasswordInputComposer = require('.')

class PasswordInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new PasswordInputComposer(this.locator)
  }
}

module.exports = PasswordInputComposerLocator
