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
    dictionary    = this.locator.locate('core/dictionary')

    return new TextareaInputGroupComposer(configuration, dictionary)
  }
}

module.exports = TextareaInputGroupComposerLocator
