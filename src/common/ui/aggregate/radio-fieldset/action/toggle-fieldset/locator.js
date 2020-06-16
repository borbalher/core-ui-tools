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
    store                 = this.locator.locate('core/store'),
    radioFieldsetComposer = this.locator.locate('ui/radio-fieldset/composer')

    return new ToggleFieldset(store, radioFieldsetComposer)
  }
}

module.exports = ToggleFieldsetLocator
