const SetInputValueObserver = require('.')

class SetInputValueObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const selectInput = this.locator.locate('ui/select-input')
    return new SetInputValueObserver(selectInput)
  }
}

module.exports = SetInputValueObserverLocator
