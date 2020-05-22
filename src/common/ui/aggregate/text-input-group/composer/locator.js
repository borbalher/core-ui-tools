const TextInputGroupComposer = require('.')

class TextInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.text-input-group')

    return new TextInputGroupComposer(this.locator, options)
  }
}

module.exports = TextInputGroupComposerLocator
