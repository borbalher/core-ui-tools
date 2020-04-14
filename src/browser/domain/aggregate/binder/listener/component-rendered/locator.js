const ComponentRenderedObserver = require('.')

class ComponentRenderedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const binder = this.locator.locate('core/binder')
    return new ComponentRenderedObserver(binder)
  }
}

module.exports = ComponentRenderedObserverLocator
