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
    dateInputGroupComposer = this.locator.locate('ui/date-input-group/composer')

    return new ValidateInputAction({ dateInputGroupComposer, store })
  }
}

module.exports = ValidateInputActionLocator
