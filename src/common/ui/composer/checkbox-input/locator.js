const CheckboxInputComposer = require('.')

class CheckboxInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new CheckboxInputComposer(configuration)
  }
}

module.exports = CheckboxInputComposerLocator
