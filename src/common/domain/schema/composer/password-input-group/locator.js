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
    configuration         = this.locator.locate('core/configuration'),
    options               = configuration.find('core.component.password-input-group'),
    passwordInputComposer = this.locator.locate('core/password-input/composer'),
    componentComposer     = this.locator.locate('core/component/composer')

    return new PasswordInputComposer(componentComposer, passwordInputComposer, options)
  }
}

module.exports = PasswordInputComposerLocator
