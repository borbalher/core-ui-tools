const TextInputGroupComposer = require('.')

class TextInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new TextInputGroupComposer(configuration)
  }
}

module.exports = TextInputGroupComposerLocator
