const PromiseMiddleware = require('.')

class PromiseMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new PromiseMiddleware()
  }
}

module.exports = PromiseMiddlewareLocator
