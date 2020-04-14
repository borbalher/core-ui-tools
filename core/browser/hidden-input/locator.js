const HiddenInputComponent = require('.')

class HiddenInputComponentLocator
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

    return new HiddenInputComponent(ui, bus)
  }
}

module.exports = HiddenInputComponentLocator
