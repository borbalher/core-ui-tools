const PaginationComposer = require('.')

class PaginationComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.pagination')

    return new PaginationComposer(this.locator, options)
  }
}

module.exports = PaginationComposerLocator
