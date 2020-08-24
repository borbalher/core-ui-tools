const CheckboxInputGroupComposer = require('.')

class CheckboxInputGroupComposerLocator
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

    return new CheckboxInputGroupComposer(configuration, dictionary)
  }
}

module.exports = CheckboxInputGroupComposerLocator
