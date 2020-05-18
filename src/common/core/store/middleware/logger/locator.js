const LoggerMiddleware = require('.')

class LoggerMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new LoggerMiddleware()
  }
}

module.exports = LoggerMiddlewareLocator
