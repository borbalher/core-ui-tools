const RadioButtonInputGroupComposer = require('.')

class RadioButtonInputGroupComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new RadioButtonInputGroupComposer(this.locator)
  }
}

module.exports = RadioButtonInputGroupComposerLocator
