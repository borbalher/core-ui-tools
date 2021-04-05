const PageClickedAction = require('.')

class PageClickedActionLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store              = this.locator.locate('core/store'),
    paginationComposer = this.locator.locate('ui/composer/pagination')

    return new PageClickedAction({ store, paginationComposer })
  }
}

module.exports = PageClickedActionLocator
