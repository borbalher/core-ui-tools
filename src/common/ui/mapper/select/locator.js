const SelectMapper = require('.')

class SelectMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new SelectMapper()
  }
}

module.exports = SelectMapperLocator
