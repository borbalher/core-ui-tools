const NumberInputGroupComposer = require('.')

class NumberInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new NumberInputGroupComposer(configuration)
  }
}

module.exports = NumberInputGroupComposerLocator
