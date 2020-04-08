const ErrorComponent = require('.')

class ErrorComponentLocator
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

    return new ErrorComponent(ui, bus)
  }
}

module.exports = ErrorComponentLocator
