const ToggeablePanelController = require('.')

class ToggeablePanelControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return ToggeablePanelController
  }
}

module.exports = ToggeablePanelControllerLocator
