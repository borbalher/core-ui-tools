const NextPagesClicked = require('.')

class NextPagesClickedLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store = this.locator.locate('core/store')

    return new NextPagesClicked(store)
  }
}

module.exports = NextPagesClickedLocator
