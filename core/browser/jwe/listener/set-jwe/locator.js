const SetJWEObserver = require('.')

class SetJWEObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const jwe = this.locator.locate('core/jwe')
    return new SetJWEObserver(jwe)
  }
}

module.exports = SetJWEObserverLocator
