const OnDispatchActionObserver = require('.')

class OnDispatchActionObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnDispatchActionObserver(ui)
  }
}

module.exports = OnDispatchActionObserverLocator
