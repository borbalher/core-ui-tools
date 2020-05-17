const SelectedOptionsToDataMapper = require('.')

class SelectedOptionsToDataMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new SelectedOptionsToDataMapper()
  }
}

module.exports = SelectedOptionsToDataMapperLocator
