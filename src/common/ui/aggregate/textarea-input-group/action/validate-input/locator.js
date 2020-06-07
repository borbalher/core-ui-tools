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
    store  = this.locator.locate('core/store')

    return new ValidateInputAction(store)
  }
}

module.exports = ValidateInputActionLocator
