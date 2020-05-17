const OnActionClickedObserver = require('.')

class OnActionClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnActionClickedObserver(ui)
  }
}

module.exports = OnActionClickedObserverLocator
