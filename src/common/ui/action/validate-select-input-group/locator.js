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
    selectInputGroupComposer = this.locator.locate('ui/composer/select-input-group')

    return new ValidateInputAction({ selectInputGroupComposer, store })
  }
}

module.exports = ValidateInputActionLocator
