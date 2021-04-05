const ValidateCheckboxInputGroupAction = require('.')

class ValidateCheckboxInputGroupActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store                      = this.locator.locate('core/store'),
    checkboxInputGroupComposer = this.locator.locate('ui/composer/checkbox-input-group')

    return new ValidateCheckboxInputGroupAction({ checkboxInputGroupComposer, store })
  }
}

module.exports = ValidateCheckboxInputGroupActionLocator
