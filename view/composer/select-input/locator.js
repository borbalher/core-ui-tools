const SelectInputComposer = require('.')

class SelectInputComposerLocator
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

    return new SelectInputComposer(deepclone, componentComposer)
  }
}

module.exports = SelectInputComposerLocator
