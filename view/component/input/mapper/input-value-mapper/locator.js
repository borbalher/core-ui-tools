const InputValueMapperMapper = require('.')

class InputValueMapperMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new InputValueMapperMapper()
  }
}

module.exports = InputValueMapperMapperLocator
