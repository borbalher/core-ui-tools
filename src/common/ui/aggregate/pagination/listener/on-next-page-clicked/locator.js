const OnNextPageClickedObserver = require('.')

class OnNextPageClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page = this.locator.locate('core/page')
    return new OnNextPageClickedObserver(page)
  }
}

module.exports = OnNextPageClickedObserverLocator
