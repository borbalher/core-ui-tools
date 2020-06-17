const PaginationComposer = require('.')

class PaginationComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new PaginationComposer(this.locator)
  }
}

module.exports = PaginationComposerLocator
