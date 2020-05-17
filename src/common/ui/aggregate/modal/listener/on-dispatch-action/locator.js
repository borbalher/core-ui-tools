const OnDispatchActionObserver = require('.')

class OnDispatchActionObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page = this.locator.locate('core/page')
    return new OnDispatchActionObserver(page)
  }
}

module.exports = OnDispatchActionObserverLocator
