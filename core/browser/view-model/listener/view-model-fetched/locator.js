const ViewModelFetchedObserver = require('.')

class ViewModelFetchedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const viewModel = this.locator.locate('core/view-model')
    return new ViewModelFetchedObserver(viewModel)
  }
}

module.exports = ViewModelFetchedObserverLocator
