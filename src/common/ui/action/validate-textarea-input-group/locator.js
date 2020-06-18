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
    textareaInputGroupComposer = this.locator.locate('ui/textarea-input-group/composer')

    return new ValidateTextareaInputGroupAction({ textareaInputGroupComposer, store })
  }
}

module.exports = ValidateTextareaInputGroupActionLocator
