const RadioButtonInputGroupComposer = require('.')

class RadioButtonInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    dictionary    = this.locator.locate('core/dictionary')

    return new RadioButtonInputGroupComposer(configuration, dictionary)
  }
}

module.exports = RadioButtonInputGroupComposerLocator
