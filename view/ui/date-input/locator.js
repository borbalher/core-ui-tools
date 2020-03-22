const DateInputComponent = require('.')

class DateInputComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    ui     = this.locator.locate('core/ui'),
    bus    = this.locator.locate('core/bus'),
    moment = this.locator.locate('core/moment')

    return new DateInputComponent(ui, bus, moment)
  }
}

module.exports = DateInputComponentLocator
