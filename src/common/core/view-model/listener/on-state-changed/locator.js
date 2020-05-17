const OnStateChangedObserver = require('.')

class OnStateChangedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const viewModel = this.locator.locate('core/view-model')
    return new OnStateChangedObserver(viewModel)
  }
}

module.exports = OnStateChangedObserverLocator
