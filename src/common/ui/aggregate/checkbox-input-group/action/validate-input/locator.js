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
    store                      = this.locator.locate('core/store'),
    checkboxInputGroupComposer = this.locator.locate('ui/checkbox-input-group/composer')

    return new ValidateInputAction(store, checkboxInputGroupComposer)
  }
}

module.exports = ValidateInputActionLocator
