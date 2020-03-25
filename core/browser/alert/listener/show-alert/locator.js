const ShowAlertObserver = require('.')

class ShowAlertObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const alert = this.locator.locate('core/alert')
    return new ShowAlertObserver(alert)
  }
}

module.exports = ShowAlertObserverLocator
