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
    repository  = this.locator.locate('infrastructure/ui/repository'),
    channel     = bus.createChannel('view-model')

    return new ViewModel(channel, repository)
  }
}

module.exports = ViewModelLocator
