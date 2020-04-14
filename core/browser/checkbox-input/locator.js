const CheckboxInputComponent = require('.')

class CheckboxInputComponentLocator
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

    return new CheckboxInputComponent(ui, bus)
  }
}

module.exports = CheckboxInputComponentLocator
