const PrevPageClickObserver = require('.')

class PrevPageClickObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new PrevPageClickObserver(ui)
  }
}

module.exports = PrevPageClickObserverLocator
