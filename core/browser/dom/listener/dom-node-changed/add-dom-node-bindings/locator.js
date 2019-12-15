const RenderDOMNodeObserver = require('.')

class RenderDOMNodeObserverLocator
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

    return new RenderDOMNodeObserver(bus, dom, configuration, this.locator)
  }
}

module.exports = RenderDOMNodeObserverLocator
