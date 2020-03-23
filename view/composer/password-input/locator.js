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
    componentComposer = this.locator.locate('composer/component'),
    errorComposer     = this.locator.locate('composer/error')

    return new PasswordInputComposer(componentComposer, errorComposer)
  }
}

module.exports = PasswordInputComposerLocator
