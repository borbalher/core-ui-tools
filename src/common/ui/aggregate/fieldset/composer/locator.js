const FieldsetComposer = require('.')

class FieldsetComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new FieldsetComposer(this.locator)
  }
}

module.exports = FieldsetComposerLocator
