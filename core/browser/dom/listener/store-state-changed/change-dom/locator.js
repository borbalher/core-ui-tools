const ChangeDOMObserver = require('.')

class ChangeDOMObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const dom = this.locator.locate('core/dom')
    return new ChangeDOMObserver(dom)
  }
}

module.exports = ChangeDOMObserverLocator
