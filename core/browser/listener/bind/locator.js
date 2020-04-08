const RenderComponentObserver = require('core-ui-tools/core/browser/listener/bind')

class RenderComponentObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const binder = this.locator.locate('core/binder')
    return new RenderComponentObserver(binder)
  }
}

module.exports = RenderComponentObserverLocator
