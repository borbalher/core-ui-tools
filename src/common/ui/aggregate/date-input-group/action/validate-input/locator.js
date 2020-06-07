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
    store      = this.locator.locate('core/store'),
    coreMoment = this.locator.locate('core/moment')

    return new ValidateInputAction({ store, coreMoment })
  }
}

module.exports = ValidateInputActionLocator
