class EntitySet
{
  constructor({
    entities,
    deepfind,
    deepmerge,
    normalizer
  })
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

  getEntityPath(type, id)
  {
    return `${type}.byId.${id}`
  }

  getEntity(schemaName, id)
  {
    const
    type    = this.normalizer.getEntityType(schemaName),
    path    = this.getEntityPath(type, id),
    entity  = this.deepfind.find(path, this.entities)

    return entity
  }

  getAttribute(schemaName, id, attribute, defaultValue = undefined)
  {
    const entity = this.getEntityContext(schemaName, id)
    return entity &&  entity[attribute] ? entity[attribute] : defaultValue
  }

  getEntityContext(schemaName, id)
  {
    const
    type    = this.normalizer.getEntityType(schemaName),
    entity  = this.getEntity(type, id),
    context = entity ? this.normalizer.denormalize(entity, schemaName, this.entities) : undefined
    return context
  }
}

module.exports = EntitySet
