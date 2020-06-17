const SelectInputComposer = require('.')

class SelectInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new SelectInputComposer(this.locator)
  }
}

module.exports = SelectInputComposerLocator
