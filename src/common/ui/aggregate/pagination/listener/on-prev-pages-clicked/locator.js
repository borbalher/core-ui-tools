const OnPrevPagesClickedObserver = require('.')

class OnPrevPagesClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page = this.locator.locate('core/page')
    return new OnPrevPagesClickedObserver(page)
  }
}

module.exports = OnPrevPagesClickedObserverLocator
