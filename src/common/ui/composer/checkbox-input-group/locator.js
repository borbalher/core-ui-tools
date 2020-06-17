const CheckboxInputGroupComposer = require('.')

class CheckboxInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new CheckboxInputGroupComposer(configuration)
  }
}

module.exports = CheckboxInputGroupComposerLocator
