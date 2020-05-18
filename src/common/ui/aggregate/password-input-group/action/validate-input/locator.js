const ValidatePasswordInputAction = require('.')

class ValidatePasswordInputActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const store = this.locator.locate('core/store')
    return new ValidatePasswordInputAction(store)
  }
}

module.exports = ValidatePasswordInputActionLocator
