const ProcessBootstrap = require('.')

class ProcessBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    bus           = this.locator.locate('infrastructure/bus'),
    eventComposer = this.locator.locate('core/event/composer')
    return new ProcessBootstrap(bus, eventComposer)
  }
}

module.exports = ProcessBootstrapLocator
