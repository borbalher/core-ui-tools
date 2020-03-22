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
    bus         = this.locator.locate('core/bus'),
    repository  = this.locator.locate('infrastructure/ui/repository')

    return new ViewModel(deepclone, bus, repository)
  }
}

module.exports = ViewModelLocator
