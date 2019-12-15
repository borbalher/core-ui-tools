const FormComposer = require('.')

class FormComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const componentComposer = this.locator.locate('composer/component')
    return new FormComposer(componentComposer)
  }
}

module.exports = FormComposerLocator
