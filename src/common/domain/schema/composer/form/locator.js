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
    options           = configuration.find('core.component.form'),
    componentComposer = this.locator.locate('core/component/composer')

    return new FormInputComposer(componentComposer, options)
  }
}

module.exports = FormInputComposerLocator
