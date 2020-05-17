const OnButtonClickedObserver = require('.')

class OnButtonClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnButtonClickedObserver(ui)
  }
}

module.exports = OnButtonClickedObserverLocator
