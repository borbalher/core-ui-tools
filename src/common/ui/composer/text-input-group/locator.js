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
    dictionary    = this.locator.locate('core/dictionary')

    return new TextInputGroupComposer(configuration, dictionary)
  }
}

module.exports = TextInputGroupComposerLocator
