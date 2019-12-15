const BusBootstrap = require('.')

class BusBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    bus             = this.locator.locate('core/bus'),
    configuration   = this.locator.locate('core/configuration'),
    channels        = configuration.find('core.bus.channels')

    return new BusBootstrap(this.locator, bus, channels)
  }
}

module.exports = BusBootstrapLocator
