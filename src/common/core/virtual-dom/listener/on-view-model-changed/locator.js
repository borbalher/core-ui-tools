const OnViewModelChangedObserver = require('.')

class OnViewModelChangedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const virtualDOM = this.locator.locate('core/virtual-dom')
    return new OnViewModelChangedObserver(virtualDOM)
  }
}

module.exports = OnViewModelChangedObserverLocator
