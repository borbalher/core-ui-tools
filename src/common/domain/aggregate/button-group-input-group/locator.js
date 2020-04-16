const ButtonGroupInputGroupComponent = require('.')

class ButtonGroupInputGroupComponentLocator
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

    return new ButtonGroupInputGroupComponent(ui, bus)
  }
}

module.exports = ButtonGroupInputGroupComponentLocator
