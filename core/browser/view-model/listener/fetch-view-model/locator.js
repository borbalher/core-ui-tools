const ViewModelFetcherObserver = require('.')

class ViewModelFetcherObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    viewModel  = this.locator.locate('core/view-model'),
    repository = this.locator.locate('infrastructure/ui/repository')

    return new ViewModelFetcherObserver(viewModel, repository)
  }
}

module.exports = ViewModelFetcherObserverLocator
