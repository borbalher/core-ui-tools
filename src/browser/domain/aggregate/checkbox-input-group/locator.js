const CheckboxInputGroupComponent = require('.')

class CheckboxInputGroupComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return CheckboxInputGroupComponent
  }
}

module.exports = CheckboxInputGroupComponentLocator
