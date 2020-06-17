const SelectInputComposer = require('.')

class SelectInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new SelectInputComposer(configuration)
  }
}

module.exports = SelectInputComposerLocator
