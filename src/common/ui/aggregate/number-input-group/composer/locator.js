const NumberInputGroupComposer = require('.')

class NumberInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new NumberInputGroupComposer(this.locator)
  }
}

module.exports = NumberInputGroupComposerLocator
