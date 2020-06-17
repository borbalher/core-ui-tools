const ToggeableFieldsetComposer = require('.')

class ToggeableFieldsetComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new ToggeableFieldsetComposer(this.locator)
  }
}

module.exports = ToggeableFieldsetComposerLocator
