const RadioButtonInputComposer = require('.')

class RadioButtonInputComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new RadioButtonInputComposer(this.locator)
  }
}

module.exports = RadioButtonInputComposerLocator
