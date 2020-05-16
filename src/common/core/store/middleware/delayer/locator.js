const delayerMiddleware = require('.')

class DelayerMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return delayerMiddleware
  }
}

module.exports = DelayerMiddlewareLocator
