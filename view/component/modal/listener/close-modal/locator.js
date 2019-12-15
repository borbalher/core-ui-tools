const CloseModalValueObserver = require('.')

class CloseModalValueObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const modal = this.locator.locate('ui/modal')
    return new CloseModalValueObserver(modal)
  }
}

module.exports = CloseModalValueObserverLocator
