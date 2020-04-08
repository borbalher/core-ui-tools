const SelectInputComponent = require('.')

class SelectInputComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    ui  = this.locator.locate('core/ui'),
    bus = this.locator.locate('core/bus')

    return new SelectInputComponent(ui, bus)
  }
}

module.exports = SelectInputComponentLocator
