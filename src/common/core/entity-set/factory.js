const EntitySet = require('.')

class EntitySetFactory
{
  constructor(deepfind, deepmerge, normalizer, coreString)
  {
    this.deepfind   = deepfind
    this.deepmerge  = deepmerge
    this.normalizer = normalizer
    this.coreString = coreString
  }

  create(entities)
  {
    return new EntitySet({
      entities,
      deepfind   : this.deepfind,
      deepmerge  : this.deepmerge,
      normalizer : this.normalizer,
      coreString : this.coreString
    })
  }
}

module.exports = EntitySetFactory
