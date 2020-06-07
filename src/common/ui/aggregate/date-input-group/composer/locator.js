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
    options       = configuration.find('ui.component.date-input-group')

    return new DateInputGroupComposer(this.locator, options)
  }
}

module.exports = DateInputGroupComposerLocator
