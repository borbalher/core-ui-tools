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

  getEntity(schemaName, id)
  {
    const
    state   = this.getState(),
    type    = this.normalizer.getEntityType(schemaName),
    path    = this.getEntityPath(type, id),
    entity  = this.deepfind.find(path, state)

    return entity
  }

  getEntityContext(schemaName, id)
  {
    const
    entity  = this.getEntity(schemaName, id),
    context = this.normalizer.denormalize(entity, schemaName, this.entities)

    return context
  }
}

module.exports = Entities
