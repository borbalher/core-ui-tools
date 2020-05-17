const PageBootstrap = require('.')

class PageBootstrapLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const page = this.locator.locate('core/page')
    return new PageBootstrap(page)
  }
}

module.exports = PageBootstrapLocator
