const ViewModelAggregate = require('.')

class ViewModelAggregateLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    pages         = configuration.find('core.pages'),
    viewModels    = {}

    for(const page of pages)
      viewModels[page] = this.locator.locate(`view-model/${page}/composer`)

    return new ViewModelAggregate({
      viewModels,
      pages
    })
  }
}

module.exports = ViewModelAggregateLocator
