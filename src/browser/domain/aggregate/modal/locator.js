const Modal = require('.')

class ModalLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return Modal
  }
}

module.exports = ModalLocator
