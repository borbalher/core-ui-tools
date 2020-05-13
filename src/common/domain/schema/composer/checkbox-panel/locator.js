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
    configuration         = this.locator.locate('core/configuration'),
    options               = configuration.find('core.component.checkbox-input'),
    componentComposer     = this.locator.locate('core/component/composer'),
    checkboxInputComposer = this.locator.locate('core/checkbox-input/composer')

    return new CheckboxInputComposer(componentComposer, checkboxInputComposer, options)
  }
}

module.exports = CheckboxInputComposerLocator
