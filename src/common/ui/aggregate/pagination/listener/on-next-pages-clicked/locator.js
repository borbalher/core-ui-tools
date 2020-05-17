const OnPageClickedObserver = require('.')

class OnPageClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnPageClickedObserver(ui)
  }
}

module.exports = OnPageClickedObserverLocator
