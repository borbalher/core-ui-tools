const SelectedOptionsToValueMapper = require('.')

class SelectedOptionsToValueMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new SelectedOptionsToValueMapper()
  }
}

module.exports = SelectedOptionsToValueMapperLocator
