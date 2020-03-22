const ButtonGroupInputComponent = require('.')

class ButtonGroupInputComponentLocator
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

    return new ButtonGroupInputComponent(ui, bus)
  }
}

module.exports = ButtonGroupInputComponentLocator
