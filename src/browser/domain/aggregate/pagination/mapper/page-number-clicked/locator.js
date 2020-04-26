const PageNumberClickedMapper = require('.')

class PageNumberClickedMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new PageNumberClickedMapper()
  }
}

module.exports = PageNumberClickedMapperLocator
