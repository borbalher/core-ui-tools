const SetInputDataObserver = require('.')

class SetInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const numberInput = this.locator.locate('ui/number-input')
    return new SetInputDataObserver(numberInput)
  }
}

module.exports = SetInputDataObserverLocator
