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
    textInputGroupComposer = this.locator.locate('ui/composer/text-input-group')

    return new ValidateInputAction({ textInputGroupComposer, store })
  }
}

module.exports = ValidateInputActionLocator
