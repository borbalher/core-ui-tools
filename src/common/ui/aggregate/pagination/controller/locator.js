const PaginationController = require('.')

class PaginationControllerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return PaginationController
  }
}

module.exports = PaginationControllerLocator
