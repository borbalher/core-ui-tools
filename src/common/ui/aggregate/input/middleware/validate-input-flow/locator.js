const ValidateInputMiddleware = require('.')

class ValidateInputMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new ValidateInputMiddleware()
  }
}

module.exports = ValidateInputMiddlewareLocator
