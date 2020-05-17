const ViewModelChangedObserver = require('.')

class ViewModelChangedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new ViewModelChangedObserver(ui)
  }
}

module.exports = ViewModelChangedObserverLocator
