const OnButtonClickedObserver = require('.')

class OnButtonClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page = this.locator.locate('core/page')
    return new OnButtonClickedObserver(page)
  }
}

module.exports = OnButtonClickedObserverLocator
