const DateInputGroupComposer = require('.')

class DateInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new DateInputGroupComposer(configuration)
  }
}

module.exports = DateInputGroupComposerLocator
