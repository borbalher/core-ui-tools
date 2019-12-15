const CreateSessionObserver = require('.')

class CreateSessionObserverLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const authorization = this.locator.locate('core/authorization')
    return new CreateSessionObserver(authorization)
  }
}

module.exports = CreateSessionObserverLocator
