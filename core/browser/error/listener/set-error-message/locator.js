const SetErrorMessageObserver = require('.')

class SetErrorMessageObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const error = this.locator.locate('ui/error')
    return new SetErrorMessageObserver(error)
  }
}

module.exports = SetErrorMessageObserverLocator
