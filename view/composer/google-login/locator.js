const GoogleLoginComposer = require('.')

class GoogleLoginComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const componentComposer = this.locator.locate('composer/component')
    return new GoogleLoginComposer(componentComposer)
  }
}

module.exports = GoogleLoginComposerLocator
