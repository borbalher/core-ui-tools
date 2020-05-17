const OnTogglePanelObserver = require('.')

class OnTogglePanelObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page = this.locator.locate('core/page')
    return new OnTogglePanelObserver(page)
  }
}

module.exports = OnTogglePanelObserverLocator
