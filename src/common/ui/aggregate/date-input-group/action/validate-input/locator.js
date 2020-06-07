const ValidateInputAction = require('.')

class ValidateInputActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store                  = this.locator.locate('core/store'),
    coreMoment             = this.locator.locate('core/moment'),
    dateInputGroupComposer = this.locator.locate('ui/date-input-group/composer')

    return new ValidateInputAction(store, coreMoment, dateInputGroupComposer)
  }
}

module.exports = ValidateInputActionLocator
