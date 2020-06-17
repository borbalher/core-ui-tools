const PageComposer = require('.')

class PageComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new PageComposer(this.locator)
  }
}

module.exports = PageComposerLocator
