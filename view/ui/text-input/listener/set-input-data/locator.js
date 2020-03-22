const SetInputDataObserver = require('.')

class SetInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const textInput = this.locator.locate('ui/text-input')
    return new SetInputDataObserver(textInput)
  }
}

module.exports = SetInputDataObserverLocator
