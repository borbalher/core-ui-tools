const FieldsetComposer = require('.')

class FieldsetComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration     = this.locator.locate('core/configuration'),
    options           = configuration.find('core.component.fieldset'),
    componentComposer = this.locator.locate('core/component/composer')

    return new FieldsetComposer(componentComposer, options)
  }
}

module.exports = FieldsetComposerLocator
