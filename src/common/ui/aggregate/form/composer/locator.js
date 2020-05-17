const FormInputComposer = require('.')

class FormInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration     = this.locator.locate('core/configuration'),
    options           = configuration.find('ui.component.form')

    return new FormInputComposer(this.locator, options)
  }
}

module.exports = FormInputComposerLocator
