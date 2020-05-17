const RadioButtonInputController = require('.')

class RadioButtonInputControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return RadioButtonInputController
  }
}

module.exports = RadioButtonInputControllerLocator
