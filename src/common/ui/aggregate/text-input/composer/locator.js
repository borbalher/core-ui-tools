const TextInputComposer = require('.')

class TextInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new TextInputComposer(this.locator)
  }
}

module.exports = TextInputComposerLocator
