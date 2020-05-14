const ToggableFieldsetComposer = require('.')

class ToggableFieldsetComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration              = this.locator.locate('core/configuration'),
    options                    = configuration.find('core.component.toggable-fieldset'),
    componentComposer          = this.locator.locate('core/component/composer'),
    checkboxInputGroupComposer = this.locator.locate('core/checkbox-input-group/composer')

    return new ToggableFieldsetComposer(componentComposer, checkboxInputGroupComposer, options)
  }
}

module.exports = ToggableFieldsetComposerLocator
