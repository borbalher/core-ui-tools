const ButtonGroupInputComponent = require('.')

class ButtonGroupInputComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return ButtonGroupInputComponent
  }
}

module.exports = ButtonGroupInputComponentLocator
