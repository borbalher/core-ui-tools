const InputValueMapper = require('.')

class InputValueMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new InputValueMapper()
  }
}

module.exports = InputValueMapperLocator
