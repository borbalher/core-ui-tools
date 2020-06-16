const RadioFieldsetComposer = require('.')

class RadioFieldsetComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.radio-fieldset')

    return new RadioFieldsetComposer(this.locator, options)
  }
}

module.exports = RadioFieldsetComposerLocator
