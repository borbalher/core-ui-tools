const PasswordInputComponent = require('.')

class PasswordInputComponentLocator
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

    return new PasswordInputComponent(ui, bus)
  }
}

module.exports = PasswordInputComponentLocator
