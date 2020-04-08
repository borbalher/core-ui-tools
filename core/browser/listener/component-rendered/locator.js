const ComponentRenderednObserver = require('.')

class ComponentRenderednObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const listener = this.locator.locate('core/listener')
    return new ComponentRenderednObserver(listener)
  }
}

module.exports = ComponentRenderednObserverLocator
