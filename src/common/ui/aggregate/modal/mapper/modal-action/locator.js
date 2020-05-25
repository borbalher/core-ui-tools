const ModalActionMapper = require('.')

class ModalActionMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new ModalActionMapper()
  }
}

module.exports = ModalActionMapperLocator
