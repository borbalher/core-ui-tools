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
    options       = configuration.find('core.component.radio-button-input-group')

    return new RadioButtonInputGroupComposer(this.locator, options)
  }
}

module.exports = RadioButtonInputGroupComposerLocator
