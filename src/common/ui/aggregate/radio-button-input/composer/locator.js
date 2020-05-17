const RadioButtonInputComposer = require('.')

class RadioButtonInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.radio-button-input')

    return new RadioButtonInputComposer(this.locator, options)
  }
}

module.exports = RadioButtonInputComposerLocator
