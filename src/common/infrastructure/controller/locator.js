const
ControllerRepository  = require('.'),
AssociativeArray      = require('common/core/data-structure/associative-array')

class ControllerRepositoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const controllers = new AssociativeArray()

    return new ControllerRepository(controllers)
  }
}

module.exports = ControllerRepositoryLocator
