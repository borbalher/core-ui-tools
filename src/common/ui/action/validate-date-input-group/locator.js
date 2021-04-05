const ValidateDateInputGroupAction = require('.')

class ValidateDateInputGroupActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store                  = this.locator.locate('core/store'),
    dateInputGroupComposer = this.locator.locate('ui/composer/date-input-group')

    return new ValidateDateInputGroupAction({ dateInputGroupComposer, store })
  }
}

module.exports = ValidateDateInputGroupActionLocator
