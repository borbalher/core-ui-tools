const CloseModalObserver = require('.')

class CloseModalObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const coreString = this.locator.locate('core/string')
    return new CloseModalObserver(coreString)
  }
}

module.exports = CloseModalObserverLocator
