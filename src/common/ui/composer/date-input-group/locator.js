const DateInputGroupComposer = require('.')

class DateInputGroupComposerLocator
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

    return new DateInputGroupComposer(configuration, dictionary)
  }
}

module.exports = DateInputGroupComposerLocator
