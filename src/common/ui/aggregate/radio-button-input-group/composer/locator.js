const RadioButtonInputGroupComposer = require('.')

class RadioButtonInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new RadioButtonInputGroupComposer(configuration)
  }
}

module.exports = RadioButtonInputGroupComposerLocator
