const InputDataSettedObserver = require('.')

class InputDataSettedObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const textInputGroup = this.locator.locate('ui/text-input-group')
    return new InputDataSettedObserver(textInputGroup)
  }
}

module.exports = InputDataSettedObserverLocator
