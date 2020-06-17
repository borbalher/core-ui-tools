const DateInputGroupComposer = require('.')

class DateInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new DateInputGroupComposer(this.locator)
  }
}

module.exports = DateInputGroupComposerLocator
