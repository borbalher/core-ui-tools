const HiddenInputComposer = require('.')

class HiddenInputComposerLocator
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

    return new HiddenInputComposer(componentComposer, errorComposer)
  }
}

module.exports = HiddenInputComposerLocator
