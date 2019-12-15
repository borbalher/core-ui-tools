const CheckboxInputComposer = require('.')

class CheckboxInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const componentComposer = this.locator.locate('composer/component')
    return new CheckboxInputComposer(componentComposer)
  }
}

module.exports = CheckboxInputComposerLocator
