const PaginationComposer = require('.')

class PaginationComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new PaginationComposer()
  }
}

module.exports = PaginationComposerLocator
