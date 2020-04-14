const ComponentBindedObserver = require('.')

class ComponentBindedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new ComponentBindedObserver(ui)
  }
}

module.exports = ComponentBindedObserverLocator
