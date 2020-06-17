const NextPageClickedAction = require('.')

class NextPageClickedActionLocator
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

    return new NextPageClickedAction({ store, paginationComposer })
  }
}

module.exports = NextPageClickedActionLocator
