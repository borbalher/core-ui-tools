const SelectInputGroupComposer = require('.')

class SelectInputGroupComposerLocator
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

    return new SelectInputGroupComposer(configuration, dictionary)
  }
}

module.exports = SelectInputGroupComposerLocator
