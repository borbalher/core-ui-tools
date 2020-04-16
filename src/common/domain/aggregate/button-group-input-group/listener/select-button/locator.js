const SelectButtonDataObserver = require('.')

class SelectButtonDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const buttonGroupInputGroup = this.locator.locate('ui/button-group-input-group')
    return new SelectButtonDataObserver(buttonGroupInputGroup)
  }
}

module.exports = SelectButtonDataObserverLocator
