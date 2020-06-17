const PageBlockerComposer = require('.')

class PageBlockerComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new PageBlockerComposer(configuration)
  }
}

module.exports = PageBlockerComposerLocator
