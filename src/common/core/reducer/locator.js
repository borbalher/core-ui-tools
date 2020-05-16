const Reducer = require('.')

class ReducerLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    configuration = this.locator.locate('core/configuration'),
    actions       = configuration.find('core.reducer.actions')

    return new Reducer(actions, this.locator)
  }
}

module.exports = ReducerLocator
