const ValidateInputValueObserver = require('.')

class ValidateInputValueObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const numberInput = this.locator.locate('ui/number-input')
    return new ValidateInputValueObserver(numberInput)
  }
}

module.exports = ValidateInputValueObserverLocator
