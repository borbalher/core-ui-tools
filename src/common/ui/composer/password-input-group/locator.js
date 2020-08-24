const PasswordInputGroupComposer = require('.')

class PasswordInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    dictionary    = this.locator.locate('core/dictionary')

    return new PasswordInputGroupComposer(configuration, dictionary)
  }
}

module.exports = PasswordInputGroupComposerLocator
