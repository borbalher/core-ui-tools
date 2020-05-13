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
    options           = configuration.find('core.component.text-input-group'),
    textInputComposer = this.locator.locate('core/text-input/composer'),
    componentComposer = this.locator.locate('core/component/composer')

    return new TextInputComposer(componentComposer, textInputComposer, options)
  }
}

module.exports = TextInputComposerLocator
