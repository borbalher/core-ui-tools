const CheckedToDataMapper = require('.')

class CheckedToDataMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new CheckedToDataMapper()
  }
}

module.exports = CheckedToDataMapperLocator
