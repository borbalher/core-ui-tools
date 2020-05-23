const ReadyStatePromiseMiddleware = require('.')

class ReadyStatePromiseMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const actionComposer = this.locator.locate('core/action/composer')
    return new ReadyStatePromiseMiddleware(actionComposer)
  }
}

module.exports = ReadyStatePromiseMiddlewareLocator
