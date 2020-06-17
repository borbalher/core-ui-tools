const TextareaInputGroupComposer = require('.')

class TextareaInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new TextareaInputGroupComposer(this.locator)
  }
}

module.exports = TextareaInputGroupComposerLocator
