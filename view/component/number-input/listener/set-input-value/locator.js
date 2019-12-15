const SetInputValueObserver = require('.')

class SetInputValueObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const numberInput = this.locator.locate('ui/number-input')
    return new SetInputValueObserver(numberInput)
  }
}

module.exports = SetInputValueObserverLocator
