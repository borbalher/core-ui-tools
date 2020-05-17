const CheckboxPanelComponent = require('.')

class CheckboxPanelComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return CheckboxPanelComponent
  }
}

module.exports = CheckboxPanelComponentLocator
