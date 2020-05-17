const SelectInputController = require('.')

class SelectInputControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return SelectInputController
  }
}

module.exports = SelectInputControllerLocator
