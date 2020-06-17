const PageBlockerComposer = require('.')

class PageBlockerComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new PageBlockerComposer(this.locator)
  }
}

module.exports = PageBlockerComposerLocator
