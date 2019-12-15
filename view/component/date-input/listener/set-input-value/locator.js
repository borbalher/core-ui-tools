const SetInputValueObserver = require('.')

class SetInputValueObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const dateInput = this.locator.locate('ui/date-input')
    return new SetInputValueObserver(dateInput)
  }
}

module.exports = SetInputValueObserverLocator
