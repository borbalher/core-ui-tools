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
    configuration      = this.locator.locate('core/configuration'),
    pages              = configuration.find('core.pages'),
    entitySetFactory   = this.locator.locate('core/entity-set/factory'),
    viewModelAggregate = this.locator.locate('aggregate/view-model'),
    stateAggregate     = this.locator.locate('aggregate/state'),
    dictionary         = this.locator.locate('core/dictionary')

    return new PageComposer({
      viewModelAggregate,
      entitySetFactory,
      stateAggregate,
      dictionary,
      pages
    })
  }
}

module.exports = PageComposerLocator
