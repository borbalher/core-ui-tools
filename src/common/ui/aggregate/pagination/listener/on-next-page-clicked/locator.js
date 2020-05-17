const OnNextPageClickedObserver = require('.')

class OnNextPageClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnNextPageClickedObserver(ui)
  }
}

module.exports = OnNextPageClickedObserverLocator
