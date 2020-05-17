const
Component         = require('.'),
AssociativeArray  = require('common/core/data-structure/associative-array')

class ComponentRepositoryLocator
{
  constructor(locator)
  {
    this.locator = locator
  }

  locate()
  {
    const
    store      = this.locator.locate('core/store'),
    components = new AssociativeArray()

    return new Component(components, store)
  }
}

module.exports = ComponentRepositoryLocator
