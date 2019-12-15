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
    deepclone         = this.locator.locate('core/deepclone')

    return new ButtonGroupInputComposer(deepclone, componentComposer)
  }
}

module.exports = ButtonGroupInputComposerLocator
