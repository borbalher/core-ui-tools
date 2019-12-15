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
    dom           = this.locator.locate('core/dom'),
    configuration = this.locator.locate('core/configuration')

    return new AddDOMNodeObservers(bus, dom, configuration, this.locator)
  }
}

module.exports = AddDOMNodeObserversLocator
