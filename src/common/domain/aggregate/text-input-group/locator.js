const TextInputComponent = require('.')

class TextInputComponentLocator
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

    return new TextInputComponent(ui, bus)
  }
}

module.exports = TextInputComponentLocator
