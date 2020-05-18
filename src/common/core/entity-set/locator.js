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
    normalizer    = this.locator.locate('core/normalizer')

    return new EntitySetFactory(deepfind, deepmerge, normalizer)
  }
}

module.exports = EntitySetLocator
