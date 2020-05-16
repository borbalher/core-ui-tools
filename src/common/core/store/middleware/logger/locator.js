const loggerMiddleware = require('.')

class LoggerMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return loggerMiddleware
  }
}

module.exports = LoggerMiddlewareLocator
