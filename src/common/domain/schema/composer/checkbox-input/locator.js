const CheckboxInputComposer = require('.')

class CheckboxInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration     = this.locator.locate('core/configuration'),
    options           = configuration.find('core.component.checkbox-input'),
    componentComposer = this.locator.locate('core/component/composer')

    return new CheckboxInputComposer(componentComposer, options)
  }
}

module.exports = CheckboxInputComposerLocator
