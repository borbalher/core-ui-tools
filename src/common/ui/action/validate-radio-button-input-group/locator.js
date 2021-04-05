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
    store                         = this.locator.locate('core/store'),
    radioButtonInputGroupComposer = this.locator.locate('ui/composer/radio-button-input-group')

    return new ValidateInputAction({ radioButtonInputGroupComposer, store })
  }
}

module.exports = ValidateInputActionLocator
