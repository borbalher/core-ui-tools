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
    passwordInputGroupComposer = this.locator.locate('ui/composer/password-input-group')

    return new ValidateInputAction({ passwordInputGroupComposer, store })
  }
}

module.exports = ValidateInputActionLocator
