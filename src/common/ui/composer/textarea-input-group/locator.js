const TextareaInputGroupComposer = require('.')

class TextareaInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new TextareaInputGroupComposer(configuration)
  }
}

module.exports = TextareaInputGroupComposerLocator
