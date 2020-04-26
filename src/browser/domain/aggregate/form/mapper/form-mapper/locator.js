const FormMapper = require('.')

class FormMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new FormMapper()
  }
}

module.exports = FormMapperLocator
