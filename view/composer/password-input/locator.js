const PasswordInputComposer = require('.')

class PasswordInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const componentComposer = this.locator.locate('composer/component')
    return new PasswordInputComposer(componentComposer)
  }
}

module.exports = PasswordInputComposerLocator
