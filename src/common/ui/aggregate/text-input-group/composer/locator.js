const TextInputGroupComposer = require('.')

class TextInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new TextInputGroupComposer(this.locator)
  }
}

module.exports = TextInputGroupComposerLocator
