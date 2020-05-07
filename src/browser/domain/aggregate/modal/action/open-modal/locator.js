const OpenModalObserver = require('.')

class OpenModalObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const coreString = this.locator.locate('core/string')
    return new OpenModalObserver(coreString)
  }
}

module.exports = OpenModalObserverLocator
