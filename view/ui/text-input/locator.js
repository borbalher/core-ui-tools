const TextInputComponent = require('./reducer')

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
    bus = this.locator.locate('core/bus')

    return new TextInputComponent(ui, bus)
  }
}

module.exports = TextInputComponentLocator
