const SelectButtonObserver = require('.')

class SelectButtonObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const ui = this.locator.locate('core/ui')
    return new SelectButtonObserver(ui)
  }
}

module.exports = SelectButtonObserverLocator
