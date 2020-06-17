const FieldsetComposer = require('.')

class FieldsetComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new FieldsetComposer(configuration)
  }
}

module.exports = FieldsetComposerLocator
