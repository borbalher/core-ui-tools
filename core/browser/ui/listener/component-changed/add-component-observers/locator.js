const AddDOMNodeObservers = require('.')

class AddDOMNodeObserversLocator
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

    return new AddDOMNodeObservers(bus, ui, configuration, this.locator)
  }
}

module.exports = AddDOMNodeObserversLocator
