const ModalComponent = require('.')

class ModalComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    dom = this.locator.locate('core/dom'),
    bus = this.locator.locate('core/bus')

    return new ModalComponent(dom, bus)
  }
}

module.exports = ModalComponentLocator
