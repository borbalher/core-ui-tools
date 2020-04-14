const ProcessBootstrap = require('.')

class ProcessBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const bus = this.locator.locate('infrastructure/bus')
    return new ProcessBootstrap(bus)
  }
}

module.exports = ProcessBootstrapLocator
