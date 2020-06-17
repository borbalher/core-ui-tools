const PaginationComposer = require('.')

class PaginationComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new PaginationComposer(configuration)
  }
}

module.exports = PaginationComposerLocator
