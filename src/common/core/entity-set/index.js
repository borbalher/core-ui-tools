class Entities
{
  constructor(entities, deepfind, deepmerge, normalizer)
  {
    this.entities   = entities
    this.deepfind   = deepfind
    this.deepmerge  = deepmerge
    this.normalizer = normalizer
  }

  setEntities(entities)
  {
    this.entities = entities
  }

  getEntityTypePath(type)
  {
    return `entities.${type}`
  }

  getEntityPath(type, id)
  {
    return `entities.${type}.byId.${id}`
  }

  getEntity(type, id)
  {
    const
    path    = this.getEntityPath(type, id),
    entity  = this.deepfind.find(path, this.entities)

    return entity
  }

  getEntityContext(type, id)
  {
    const
    entity  = this.getEntity(type, id),
    context = this.normalizer.denormalize(entity, `entity/${type}`, this.entities)
    return context
  }
}

module.exports = Entities
