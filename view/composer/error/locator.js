const ErrorComposer = require('.')

class ErrorComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const componentComposer = this.locator.locate('composer/component')
    return new ErrorComposer(componentComposer)
  }
}

module.exports = ErrorComposerLocator
