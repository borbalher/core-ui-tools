const OnPrevPageClickedObserver = require('.')

class OnPrevPageClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page = this.locator.locate('core/page')
    return new OnPrevPageClickedObserver(page)
  }
}

module.exports = OnPrevPageClickedObserverLocator
