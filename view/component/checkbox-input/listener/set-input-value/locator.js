const SetInputValueObserver = require('.')

class SetInputValueObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const textInput = this.locator.locate('ui/text-input')
    return new SetInputValueObserver(textInput)
  }
}

module.exports = SetInputValueObserverLocator
