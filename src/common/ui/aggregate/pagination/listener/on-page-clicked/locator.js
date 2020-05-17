const OnPageClickObserver = require('.')

class OnPageClickObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnPageClickObserver(ui)
  }
}

module.exports = OnPageClickObserverLocator
