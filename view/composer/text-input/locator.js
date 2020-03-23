const TextInputComposer = require('.')

class TextInputComposerLocator
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

    return new TextInputComposer(componentComposer, errorComposer)
  }
}

module.exports = TextInputComposerLocator
