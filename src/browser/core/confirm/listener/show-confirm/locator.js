const ShowConfirmObserver = require('.')

class ShowConfirmObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const confirm = this.locator.locate('core/confirm')
    return new ShowConfirmObserver(confirm)
  }
}

module.exports = ShowConfirmObserverLocator
