const SelectInputComposer = require('.')

class SelectInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration       = this.locator.locate('core/configuration'),
    options             = configuration.find('core.component.select-input-group'),
    selectInputComposer = this.locator.locate('core/select-input/composer'),
    componentComposer   = this.locator.locate('core/component/composer')

    return new SelectInputComposer(componentComposer, selectInputComposer, options)
  }
}

module.exports = SelectInputComposerLocator
