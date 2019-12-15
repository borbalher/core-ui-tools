const CheckedToValueMapper = require('.')

class CheckedToValueMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new CheckedToValueMapper()
  }
}

module.exports = CheckedToValueMapperLocator
