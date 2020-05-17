const ComponentChangedObserver = require('.')

class ComponentChangedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new ComponentChangedObserver(ui)
  }
}

module.exports = ComponentChangedObserverLocator
