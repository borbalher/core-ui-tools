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
    virtualDOM             = this.locator.locate('core/virtual-dom'),
    textInputGroupComposer = this.locator.locate('ui/text-input-group/composer')

    return new ValidateInputAction({
      textInputGroupComposer,
      virtualDOM
    })
  }
}

module.exports = ValidateInputActionLocator
