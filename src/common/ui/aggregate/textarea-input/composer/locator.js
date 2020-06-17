const TextareaInputComposer = require('.')

class TextareaInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new TextareaInputComposer(this.locator)
  }
}

module.exports = TextareaInputComposerLocator
