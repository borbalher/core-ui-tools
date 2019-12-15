const RenderDOMNodeObserver = require('.')

class RenderDOMNodeObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const dom = this.locator.locate('core/dom')

    return new RenderDOMNodeObserver(dom)
  }
}

module.exports = RenderDOMNodeObserverLocator
