const SelectInputGroupComposer = require('.')

class SelectInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new SelectInputGroupComposer(configuration)
  }
}

module.exports = SelectInputGroupComposerLocator
