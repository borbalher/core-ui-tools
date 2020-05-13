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
    configuration     = this.locator.locate('core/configuration'),
    options           = configuration.find('core.component.select-input'),
    componentComposer = this.locator.locate('core/component/composer')

    return new SelectInputComposer(componentComposer, options)
  }
}

module.exports = SelectInputComposerLocator
