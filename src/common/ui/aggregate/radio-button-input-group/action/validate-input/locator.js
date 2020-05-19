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
    radioButtonInputGroupComposer = this.locator.locate('ui/radio-button-input-group/composer')

    return new ValidateInputAction({
      radioButtonInputGroupComposer,
      store
    })
  }
}

module.exports = ValidateInputActionLocator
