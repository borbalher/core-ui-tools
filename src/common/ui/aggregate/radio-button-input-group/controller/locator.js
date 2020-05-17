const RadioButtonInputGroupController = require('.')

class RadioButtonInputGroupControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return RadioButtonInputGroupController
  }
}

module.exports = RadioButtonInputGroupControllerLocator
