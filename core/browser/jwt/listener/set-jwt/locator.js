const SetJWTObserver = require('.')

class SetJWTObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const jwt = this.locator.locate('core/jwt')
    return new SetJWTObserver(jwt)
  }
}

module.exports = SetJWTObserverLocator
