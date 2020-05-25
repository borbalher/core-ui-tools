const PrevPageClicked = require('.')

class PrevPageClickedLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store              = this.locator.locate('core/store'),
    paginationComposer = this.locator.locate('ui/pagination/composer')

    return new PrevPageClicked({ store, paginationComposer })
  }
}

module.exports = PrevPageClickedLocator
