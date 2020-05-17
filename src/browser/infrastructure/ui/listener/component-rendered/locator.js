const ComponentRenderedObserver = require('.')

class ComponentRenderedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new ComponentRenderedObserver(ui)
  }
}

module.exports = ComponentRenderedObserverLocator
