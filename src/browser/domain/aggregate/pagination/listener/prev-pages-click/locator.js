const PrevPagesClickObserver = require('.')

class PrevPagesClickObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new PrevPagesClickObserver(ui)
  }
}

module.exports = PrevPagesClickObserverLocator
