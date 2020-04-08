const SetInputDataObserver = require('.')

class SetInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const selectInput = this.locator.locate('ui/select-input')
    return new SetInputDataObserver(selectInput)
  }
}

module.exports = SetInputDataObserverLocator
