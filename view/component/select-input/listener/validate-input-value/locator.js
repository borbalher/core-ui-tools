const ValidateInputValueObserver = require('.')

class ValidateInputValueObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const textInput = this.locator.locate('ui/select-input')
    return new ValidateInputValueObserver(textInput)
  }
}

module.exports = ValidateInputValueObserverLocator
