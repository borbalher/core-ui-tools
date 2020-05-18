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
    textareaInputGroupComposer = this.locator.locate('ui/textarea-input-group/composer')

    return new ValidateInputAction({
      textareaInputGroupComposer,
      store
    })
  }
}

module.exports = ValidateInputActionLocator
