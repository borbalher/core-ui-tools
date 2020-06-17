const CheckboxInputGroupComposer = require('.')

class CheckboxInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new CheckboxInputGroupComposer(this.locator)
  }
}

module.exports = CheckboxInputGroupComposerLocator
