const PageComposer = require('.')

class PageComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('core.component.page')

    return new PageComposer(this.locator, options)
  }
}

module.exports = PageComposerLocator
