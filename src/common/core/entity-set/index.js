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

  getEntity(type, id)
  {
    const
    path    = this.getEntityPath(type, id),
    entity  = this.deepfind.find(path, this.entities)

    return entity
  }

  getAttribute(type, id, attribute, defaultValue = undefined)
  {
    const entity = this.getEntity(type, id)
    return entity ? entity[attribute] : defaultValue
  }

  getEntityContext(type, id)
  {
    const
    entity  = this.getEntity(type, id),
    context = this.normalizer.denormalize(entity, `entity/${type}`, this.entities)
    return context
  }
}

module.exports = EntitySet
