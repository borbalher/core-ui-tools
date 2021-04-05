const PrevPagesClicked = require('.')

class PrevPagesClickedLocator
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

    return new PrevPagesClicked({ store, paginationComposer })
  }
}

module.exports = PrevPagesClickedLocator
