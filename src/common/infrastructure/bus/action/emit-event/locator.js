const EmitEventAction = require('.')

class EmitEventActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const bus = this.locator.locate('infrastructure/bus')

    return new EmitEventAction(bus)
  }
}

module.exports = EmitEventActionLocator
