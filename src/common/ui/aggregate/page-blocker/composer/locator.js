const PageBlockerComposer = require('.')

class PageBlockerComposerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    options       = configuration.find('ui.component.page-blocker')

    return new PageBlockerComposer(this.locator, options)
  }
}

module.exports = PageBlockerComposerLocator
