const ReadyStatePromiseMiddleware = require('.')

class ReadyStatePromiseMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new ReadyStatePromiseMiddleware()
  }
}

module.exports = ReadyStatePromiseMiddlewareLocator
