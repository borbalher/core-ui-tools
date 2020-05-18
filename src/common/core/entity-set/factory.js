const EntitySet = require('.')

class EntitySetFactory
{
  constructor(deepfind, deepmerge, normalizer)
  {
    this.deepfind   = deepfind
    this.deepmerge  = deepmerge
    this.normalizer = normalizer
  }

  create(entities)
  {
    return new EntitySet({
      entities,
      deepfind   : this.deepfind,
      deepmerge  : this.deepmerge,
      normalizer : this.normalizer
    })
  }
}

module.exports = EntitySetFactory
