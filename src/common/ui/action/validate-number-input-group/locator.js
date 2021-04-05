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
    store                    = this.locator.locate('core/store'),
    numberInputGroupComposer = this.locator.locate('ui/composer/number-input-group')

    return new ValidateInputAction({ numberInputGroupComposer, store })
  }
}

module.exports = ValidateInputActionLocator
