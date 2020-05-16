const readyStatePromiseMiddleware = require('.')

class ReadyStatePromiseMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return readyStatePromiseMiddleware
  }
}

module.exports = ReadyStatePromiseMiddlewareLocator
