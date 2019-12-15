const SessionCreatedSuccessfullyObserver = require('.')

class SessionCreatedSuccessfullyObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const authorization = this.locator.locate('core/authorization')
    return new SessionCreatedSuccessfullyObserver(authorization)
  }
}

module.exports = SessionCreatedSuccessfullyObserverLocator
