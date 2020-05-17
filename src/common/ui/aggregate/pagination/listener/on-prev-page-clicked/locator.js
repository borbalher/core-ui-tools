const OnPrevPageClickedObserver = require('.')

class OnPrevPageClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnPrevPageClickedObserver(ui)
  }
}

module.exports = OnPrevPageClickedObserverLocator
