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
    bus               = this.locator.locate('infrastructure/bus'),
    viewModelComposer = this.locator.locate('aggregate/view-model'),
    channel           = bus.createChannel('view-model')

    return new ViewModel(channel, viewModelComposer)
  }
}

module.exports = ViewModelLocator
