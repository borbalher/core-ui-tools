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
    ui  = this.locator.locate('core/ui'),
    bus = this.locator.locate('infrastructure/bus')

    return new ModalComponent(ui, bus)
  }
}

module.exports = ModalComponentLocator
