const TextInputComposer = require('.')

class TextInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration     = this.locator.locate('core/configuration'),
    options           = configuration.find('core.component.text-input'),
    componentComposer = this.locator.locate('core/component/composer')

    return new TextInputComposer(componentComposer, options)
  }
}

module.exports = TextInputComposerLocator
