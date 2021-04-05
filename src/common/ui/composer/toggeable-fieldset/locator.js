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
    configuration              = this.locator.locate('core/configuration'),
    checkboxInputGroupComposer = this.locator.locate('ui/composer/checkbox-input-group')

    return new ToggeableFieldsetComposer(configuration, checkboxInputGroupComposer)
  }
}

module.exports = ToggeableFieldsetComposerLocator
