const CloseModalObserver = require('.')

class CloseModalObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new CloseModalObserver(ui)
  }
}

module.exports = CloseModalObserverLocator
