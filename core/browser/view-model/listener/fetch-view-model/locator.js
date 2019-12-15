const ViewModelFetcherObserver = require('.')

class ViewModelFetcherObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const viewModel = this.locator.locate('core/view-model')
    return new ViewModelFetcherObserver(viewModel)
  }
}

module.exports = ViewModelFetcherObserverLocator
