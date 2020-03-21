const SetUIObserver = require('.')

class SetUIObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new SetUIObserver(ui)
  }
}

module.exports = SetUIObserverLocator
