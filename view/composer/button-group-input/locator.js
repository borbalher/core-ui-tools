const ButtonGroupInputComposer = require('.')

class ButtonGroupInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    componentComposer = this.locator.locate('composer/component'),
    errorComposer     = this.locator.locate('composer/error'),
    deepclone         = this.locator.locate('core/deepclone')

    return new ButtonGroupInputComposer(deepclone, componentComposer, errorComposer)
  }
}

module.exports = ButtonGroupInputComposerLocator
