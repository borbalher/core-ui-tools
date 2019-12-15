const ValidateInputValueObserver = require('.')

class ValidateInputValueObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const dateInput = this.locator.locate('ui/date-input')
    return new ValidateInputValueObserver(dateInput)
  }
}

module.exports = ValidateInputValueObserverLocator
