const SelectInputComponent = require('.')

class SelectInputComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return SelectInputComponent
  }
}

module.exports = SelectInputComponentLocator
