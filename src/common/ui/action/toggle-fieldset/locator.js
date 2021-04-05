const ToggleFieldset = require('.')

class ToggleFieldsetLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store                     = this.locator.locate('core/store'),
    toggeableFieldsetComposer = this.locator.locate('ui/composer/toggeable-fieldset')

    return new ToggleFieldset(store, toggeableFieldsetComposer)
  }
}

module.exports = ToggleFieldsetLocator
