const StateChangedObserver = require('.')

class StateChangedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const viewModel = this.locator.locate('core/view-model')
    return new StateChangedObserver(viewModel)
  }
}

module.exports = StateChangedObserverLocator
