const thunkMiddleware = require('.')

class ThunkMiddlewareMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return thunkMiddleware
  }
}

module.exports = ThunkMiddlewareMiddlewareLocator
