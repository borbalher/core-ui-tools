const TextareaInputComposer = require('.')

class TextareaInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('core.component.textarea-input')

    return new TextareaInputComposer(this.locator, options)
  }
}

module.exports = TextareaInputComposerLocator
