const CheckboxInputComponent = require('.')

class CheckboxInputComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return CheckboxInputComponent
  }
}

module.exports = CheckboxInputComponentLocator
