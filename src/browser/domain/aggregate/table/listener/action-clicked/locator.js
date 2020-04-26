const ActionClickedObserver = require('.')

class ActionClickedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new ActionClickedObserver(ui)
  }
}

module.exports = ActionClickedObserverLocator
