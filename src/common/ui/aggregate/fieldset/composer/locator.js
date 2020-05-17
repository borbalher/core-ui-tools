const FieldsetComposer = require('.')

class FieldsetComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('core.component.fieldset')

    return new FieldsetComposer(this.locator, options)
  }
}

module.exports = FieldsetComposerLocator
