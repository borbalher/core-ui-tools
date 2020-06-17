const PasswordInputGroupComposer = require('.')

class PasswordInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new PasswordInputGroupComposer(configuration)
  }
}

module.exports = PasswordInputGroupComposerLocator
