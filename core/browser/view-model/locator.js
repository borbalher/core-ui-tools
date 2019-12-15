const ViewModel = require('.')

class ViewModelLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    deepclone         = this.locator.locate('core/deepclone'),
    bus               = this.locator.locate('core/bus'),
    viewModelFetcher  = this.locator.locate('infrastructure/ui/view-model/fetcher')

    return new ViewModel(deepclone, bus, viewModelFetcher)
  }
}

module.exports = ViewModelLocator
