const CheckboxMapper = require('.')

class CheckboxMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new CheckboxMapper()
  }
}

module.exports = CheckboxMapperLocator
