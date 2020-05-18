const ThunkMiddleware = require('.')

class ThunkMiddlewareMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new ThunkMiddleware()
  }
}

module.exports = ThunkMiddlewareMiddlewareLocator
