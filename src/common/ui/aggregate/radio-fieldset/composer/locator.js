const RadioFieldsetComposer = require('.')

class RadioFieldsetComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new RadioFieldsetComposer(configuration)
  }
}

module.exports = RadioFieldsetComposerLocator
