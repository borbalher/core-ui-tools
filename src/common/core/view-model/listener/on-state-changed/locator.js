const OnStateChangedObserver = require('.')

class OnStateChangedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    viewModel = this.locator.locate('core/view-model'),
    store     = this.locator.locate('core/store')

    return new OnStateChangedObserver(store, viewModel)
  }
}

module.exports = OnStateChangedObserverLocator
