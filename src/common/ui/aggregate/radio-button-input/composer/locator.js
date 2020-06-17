const RadioButtonInputComposer = require('.')

class RadioButtonInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new RadioButtonInputComposer(configuration)
  }
}

module.exports = RadioButtonInputComposerLocator
