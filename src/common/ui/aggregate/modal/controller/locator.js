const ModalController = require('.')

class ModalControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return ModalController
  }
}

module.exports = ModalControllerLocator
