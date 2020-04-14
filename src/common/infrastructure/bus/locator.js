const Bus = require('.')

class BusLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    channelFactory  = this.locator.locate('core/event-emitter/factory'),
    bus             = new Bus(channelFactory)

    return bus
  }
}

module.exports = BusLocator
