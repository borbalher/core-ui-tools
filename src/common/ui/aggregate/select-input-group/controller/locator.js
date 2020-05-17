const SelectInputGroupComponent = require('.')

class SelectInputGroupComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return SelectInputGroupComponent
  }
}

module.exports = SelectInputGroupComponentLocator
