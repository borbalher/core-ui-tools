const ValidateInputDataObserver = require('.')

class ValidateInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const dateInput = this.locator.locate('ui/date-input')
    return new ValidateInputDataObserver(dateInput)
  }
}

module.exports = ValidateInputDataObserverLocator
