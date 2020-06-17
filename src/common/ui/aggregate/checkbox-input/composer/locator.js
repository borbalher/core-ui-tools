const CheckboxInputComposer = require('.')

class CheckboxInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new CheckboxInputComposer(this.locator)
  }
}

module.exports = CheckboxInputComposerLocator
