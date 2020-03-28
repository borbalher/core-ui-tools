const RemoveJWTObserver = require('.')

class RemoveJWTObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const jwt = this.locator.locate('core/jwt')
    return new RemoveJWTObserver(jwt)
  }
}

module.exports = RemoveJWTObserverLocator
