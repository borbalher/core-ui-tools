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
    dom    = this.locator.locate('core/dom'),
    bus    = this.locator.locate('core/bus'),
    moment = this.locator.locate('core/moment')

    return new DateInputComponent(dom, bus, moment)
  }
}

module.exports = DateInputComponentLocator
