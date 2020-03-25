const ErrorToMessageMapper = require('.')

class ErrorToMessageMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new ErrorToMessageMapper()
  }
}

module.exports = ErrorToMessageMapperLocator
