const OnViewModelChangedObserver = require('.')

class OnViewModelChangedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page = this.locator.locate('core/page')
    return new OnViewModelChangedObserver(page)
  }
}

module.exports = OnViewModelChangedObserverLocator
