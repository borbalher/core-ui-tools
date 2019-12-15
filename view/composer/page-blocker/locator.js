const PageBlockerComposer = require('.')

class PageBlockerComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const componentComposer = this.locator.locate('composer/component')

    return new PageBlockerComposer(componentComposer)
  }
}

module.exports = PageBlockerComposerLocator
