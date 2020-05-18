const DelayerMiddleware = require('.')

class DelayerMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new DelayerMiddleware()
  }
}

module.exports = DelayerMiddlewareLocator
