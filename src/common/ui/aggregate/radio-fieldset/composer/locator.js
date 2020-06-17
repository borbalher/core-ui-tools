const RadioFieldsetComposer = require('.')

class RadioFieldsetComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new RadioFieldsetComposer(this.locator)
  }
}

module.exports = RadioFieldsetComposerLocator
