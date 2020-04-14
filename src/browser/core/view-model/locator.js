const ViewModel = require('.')

class ViewModelLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  getInitialViewModel()
  {
    const
    localStorage      = this.locator.locate('infrastructure/local-storage/gateway'),
    initialViewModel  = localStorage.getItem('initial-view-model')
    return JSON.parse(initialViewModel)
  }

  locate()
  {
    const
    viewModelAggregate = this.locator.locate('aggregate/view-model'),
    initialViewModel   = this.getInitialViewModel(),
    channel            = this.locator.locate('infrastructure/bus').createChannel('view-model')

    return new ViewModel(initialViewModel, channel, viewModelAggregate)
  }
}

module.exports = ViewModelLocator
