const ValidateTextareaInputGroupAction = require('.')

class ValidateTextareaInputGroupActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store                      = this.locator.locate('core/store'),
    textareaInputGroupComposer = this.locator.locate('ui/composer/textarea-input-group')

    return new ValidateTextareaInputGroupAction({ textareaInputGroupComposer, store })
  }
}

module.exports = ValidateTextareaInputGroupActionLocator
