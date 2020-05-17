const OnActionClickedObserver = require('.')

class OnActionClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page = this.locator.locate('core/page')
    return new OnActionClickedObserver(page)
  }
}

module.exports = OnActionClickedObserverLocator
