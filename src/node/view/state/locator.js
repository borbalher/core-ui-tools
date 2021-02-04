const StateAggregate = require('.')

class StateAggregateLocator
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
    states        = {}

    for(const page of pages)
      states[page] = this.locator.locate(`state/${page}/composer`)

    return new StateAggregate({
      states,
      pages
    })
  }
}

module.exports = StateAggregateLocator
