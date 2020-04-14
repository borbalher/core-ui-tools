const SetInputDataObserver = require('.')

class SetInputDataObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const textInputGroup = this.locator.locate('ui/text-input-group')
    return new SetInputDataObserver(textInputGroup)
  }
}

module.exports = SetInputDataObserverLocator
