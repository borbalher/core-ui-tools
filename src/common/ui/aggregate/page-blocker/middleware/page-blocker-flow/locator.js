const ValidateInputMiddleware = require('.')

class ValidateInputMiddlewareLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const bus = this.locator.locate('infrastructure/bus')
    return new ValidateInputMiddleware(bus)
  }
}

module.exports = ValidateInputMiddlewareLocator
