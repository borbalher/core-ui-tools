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
    passwordInputGroupComposer = this.locator.locate('ui/password-input-group/composer')

    return new ValidateInputAction({
      passwordInputGroupComposer,
      store
    })
  }
}

module.exports = ValidateInputActionLocator
