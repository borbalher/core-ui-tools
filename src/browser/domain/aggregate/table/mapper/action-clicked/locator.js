const ActionClickedMapper = require('.')

class ActionClickedMapperLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    return new ActionClickedMapper()
  }
}

module.exports = ActionClickedMapperLocator
