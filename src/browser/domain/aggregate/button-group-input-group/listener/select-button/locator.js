const SelectButtonDataObserver = require('.')

class SelectButtonDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new SelectButtonDataObserver(ui)
  }
}

module.exports = SelectButtonDataObserverLocator
