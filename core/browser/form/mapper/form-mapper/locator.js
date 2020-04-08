const FormMapperMapper = require('.')

class FormMapperMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new FormMapperMapper()
  }
}

module.exports = FormMapperMapperLocator
