const DispatchActionObserver = require('.')

class DispatchActionObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new DispatchActionObserver(ui)
  }
}

module.exports = DispatchActionObserverLocator
