const NumberInputGroupComposer = require('.')

class NumberInputGroupComposerLocator
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

    return new NumberInputGroupComposer(configuration, dictionary)
  }
}

module.exports = NumberInputGroupComposerLocator
