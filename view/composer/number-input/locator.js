const NumberInputComposer = require('.')

class NumberInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const componentComposer = this.locator.locate('composer/component')
    return new NumberInputComposer(componentComposer)
  }
}

module.exports = NumberInputComposerLocator
