const TextareaInputGroupComposer = require('.')

class TextareaInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('core.component.textarea-input-group')

    return new TextareaInputGroupComposer(this.locator, options)
  }
}

module.exports = TextareaInputGroupComposerLocator
