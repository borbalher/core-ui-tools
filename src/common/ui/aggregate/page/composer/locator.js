const PageComposer = require('.')

class PageComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const configuration = this.locator.locate('core/configuration')
    return new PageComposer(this.locator, configuration)
  }
}

module.exports = PageComposerLocator
