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
    options       = configuration.find('ui.component.page')

    return new PageComposer(this.locator, options)
  }
}

module.exports = PageComposerLocator
