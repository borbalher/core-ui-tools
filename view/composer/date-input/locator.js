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
    moment            = this.locator.locate('core/moment')

    return new TextInputComposer(componentComposer, moment)
  }
}

module.exports = TextInputComposerLocator
