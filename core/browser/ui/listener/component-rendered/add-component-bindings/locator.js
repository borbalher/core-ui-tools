const AddComponentBindingsObserver = require('.')

class AddComponentBindingsObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    bus           = this.locator.locate('core/bus'),
    ui            = this.locator.locate('core/ui'),
    configuration = this.locator.locate('core/configuration')

    return new AddComponentBindingsObserver(bus, ui, configuration, this.locator)
  }
}

module.exports = AddComponentBindingsObserverLocator
