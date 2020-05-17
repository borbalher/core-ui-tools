const SelectInputGroupController = require('.')

class SelectInputGroupControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return SelectInputGroupController
  }
}

module.exports = SelectInputGroupControllerLocator
