const OnPrevPagesClickedObserver = require('.')

class OnPrevPagesClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OnPrevPagesClickedObserver(ui)
  }
}

module.exports = OnPrevPagesClickedObserverLocator
