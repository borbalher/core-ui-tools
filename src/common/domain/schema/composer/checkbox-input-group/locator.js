const CheckboxInputGroupComposer = require('.')

class CheckboxInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('core.component.checkbox-input-group')

    return new CheckboxInputGroupComposer(this.locator, options)
  }
}

module.exports = CheckboxInputGroupComposerLocator
