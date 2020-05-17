const OnTogglePanelObserver = require('.')

class OnTogglePanelObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnTogglePanelObserver(ui)
  }
}

module.exports = OnTogglePanelObserverLocator
