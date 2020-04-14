const promiseMiddleware = require('.')

class PromiseMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return promiseMiddleware
  }
}

module.exports = PromiseMiddlewareLocator
