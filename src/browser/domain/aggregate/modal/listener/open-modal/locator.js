const OpenModalObserver = require('.')

class OpenModalObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new OpenModalObserver(ui)
  }
}

module.exports = OpenModalObserverLocator
