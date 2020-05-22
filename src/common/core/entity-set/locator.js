const EntitySetFactory = require('./factory')

class EntitySetLocator
{
  constructor(locator)
  {
    this.locator = locator
  }


  locate()
  {
    const
    deepfind      = this.locator.locate('core/deepfind'),
    deepmerge     = this.locator.locate('core/deepmerge'),
    normalizer    = this.locator.locate('core/normalizer'),
    coreString    = this.locator.locate('core/string')

    return new EntitySetFactory(deepfind, deepmerge, normalizer, coreString)
  }
}

module.exports = EntitySetLocator
