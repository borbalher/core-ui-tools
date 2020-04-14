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
    bus = this.locator.locate('infrastructure/bus')

    return new ErrorComponent(ui, bus)
  }
}

module.exports = ErrorComponentLocator
