const ToggeableFieldsetComposer = require('.')

class ToggeableFieldsetComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.toggeable-fieldset')

    return new ToggeableFieldsetComposer(this.locator, options)
  }
}

module.exports = ToggeableFieldsetComposerLocator
