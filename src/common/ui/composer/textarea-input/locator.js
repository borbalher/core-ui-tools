const TextareaInputComposer = require('.')

class TextareaInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new TextareaInputComposer(configuration)
  }
}

module.exports = TextareaInputComposerLocator
