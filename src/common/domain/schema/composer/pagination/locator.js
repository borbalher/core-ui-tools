const PaginationComposer = require('.')

class PaginationComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const composer = this.locator.locate('core/schema/composer')
    return new PaginationComposer(composer)
  }
}

module.exports = PaginationComposerLocator
