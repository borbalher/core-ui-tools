const SetInputDataObserver = require('.')

class SetInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const buttonGroupInput = this.locator.locate('ui/button-group-input')
    return new SetInputDataObserver(buttonGroupInput)
  }
}

module.exports = SetInputDataObserverLocator
