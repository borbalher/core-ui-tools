const CheckboxInputGroupComposer = require('.')

class CheckboxInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration         = this.locator.locate('core/configuration'),
    options               = configuration.find('core.component.checkbox-input-group'),
    checkboxInputComposer = this.locator.locate('core/checkbox-input/composer'),
    componentComposer     = this.locator.locate('core/component/composer')

    return new CheckboxInputGroupComposer(componentComposer, checkboxInputComposer, options)
  }
}

module.exports = CheckboxInputGroupComposerLocator
