const OnPageClickedObserver = require('.')

class OnPageClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page = this.locator.locate('core/page')
    return new OnPageClickedObserver(page)
  }
}

module.exports = OnPageClickedObserverLocator
