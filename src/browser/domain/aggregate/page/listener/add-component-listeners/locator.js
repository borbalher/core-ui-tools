const AddComponentListeners = require('.')

class AddComponentListenersLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    bus           = this.locator.locate('infrastructure/bus'),
    ui            = this.locator.locate('core/ui'),
    configuration = this.locator.locate('core/configuration')

    return new AddComponentListeners(bus, ui, configuration, this.locator)
  }
}

module.exports = AddComponentListenersLocator
