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
    configuration     = this.locator.locate('core/configuration'),
    options           = configuration.find('core.component.password-input'),
    componentComposer = this.locator.locate('core/component/composer')

    return new PasswordInputComposer(componentComposer, options)
  }
}

module.exports = PasswordInputComposerLocator
