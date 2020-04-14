const AddComponentBindingsObserver = require('.')

class BinderLocator
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
    configuration = this.locator.locate('core/configuration'),
    channel       = bus.createChannel('binder')

    return new AddComponentBindingsObserver(bus, ui, configuration, channel, this.locator)
  }
}

module.exports = BinderLocator
