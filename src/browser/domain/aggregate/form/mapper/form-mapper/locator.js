const FormMapper = require('.')

class FormMapperksLocator
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
