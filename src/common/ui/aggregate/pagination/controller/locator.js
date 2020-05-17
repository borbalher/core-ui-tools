const PaginationComponent = require('.')

class PaginationComponentLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return PaginationComponent
  }
}

module.exports = PaginationComponentLocator
