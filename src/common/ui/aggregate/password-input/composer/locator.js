const PasswordInputComposer = require('.')

class PasswordInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.password-input')

    return new PasswordInputComposer(this.locator, options)
  }
}

module.exports = PasswordInputComposerLocator
