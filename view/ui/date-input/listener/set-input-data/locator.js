const SetInputDataObserver = require('.')

class SetInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const dateInput = this.locator.locate('ui/date-input')
    return new SetInputDataObserver(dateInput)
  }
}

module.exports = SetInputDataObserverLocator
