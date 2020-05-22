class EntitySet
{
  constructor({
    entities = {},
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

  clear()
  {
    this.entities = {}
  }

  update(entities)
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

  getEntityContext(schemaName, id)
  {
    const
    entity  = this.getEntity(schemaName, id),
    context = entity ? this.normalizer.denormalize(entity, schemaName, this.entities) : undefined

    return context
  }

  getEntityTypeSet()
  {
    return { byId: {}, allIds: [] }
  }

  getEntities(schemaName)
  {
    const type = this.normalizer.getEntityType(schemaName)
    return this.getEntitiesByType(type)
  }

  getEntitiesByType(type)
  {
    if(this.entities[type])
      return { ...this.entities[type] }

    return this.getEntityTypeSet()
  }

  getEntityContextNormalized(schemaName, id)
  {
    const
    entity            = this.getEntity(schemaName, id),
    context           = this.normalizer.denormalize(entity, schemaName, this.entities),
    contextNormalized = this.normalizer.normalize(context, schemaName, this.entities)

    return contextNormalized
  }

  getAttribute(schemaName, id, attribute, defaultValue = undefined)
  {
    const entity = this.getEntityContext(schemaName, id)
    return entity &&  entity[attribute] ? entity[attribute] : defaultValue
  }

  addEntities(entities)
  {
    const types = Object.keys(entities)

    let newEntitySet = {}
    for(const type of types)
      newEntitySet = { ...this.addEntitiesByType(type, entities[type]) }

    this.entities = { ...this.entities, ...newEntitySet.entities }
  }

  addEntitiesByType(type, entities)
  {
    const
    entityTypeSet = this.getEntitiesByType(type)

    entityTypeSet.byId   = { ...entityTypeSet.byId, ...entities.byId }
    entityTypeSet.allIds = [...new Set([...entityTypeSet.allIds, ...entities.allIds])]

    const
    newEntityTypeSet = {}
    newEntityTypeSet[type] = entityTypeSet

    this.entities = { ...this.entities, ...newEntityTypeSet }
  }

  addEntityContext(schemaName, context)
  {
    const entities = this.normalizer.normalize(context, schemaName)
    this.addEntities(entities)
  }

  addEntity(schemaName, id, entity)
  {
    const type = this.getEntityType(schemaName)
    return this.addEntityByType(type, id, entity)
  }

  addEntityByType(type, id, entity)
  {
    const
    entityTypeSet  = this.getEntitiesByType(type),
    byId           = {},
    allIds         = [entity.id]

    byId[id] = { ...entity }

    entityTypeSet.byId   = { ...entityTypeSet.byId, ...byId }
    entityTypeSet.allIds = [...new Set([...entityTypeSet.allIds, ...allIds])]

    this.entities = { ...this.entities, ...entityTypeSet }
  }

  removeEntity(schemaName, id)
  {
    const type = this.getEntityType(schemaName)
    return this.removeEntityByType(type, id)
  }

  removeEntityByType(type, id)
  {
    const entityTypeSet = this.getEntities(type)

    delete entityTypeSet.byId[id]
    entityTypeSet.allIds = entityTypeSet.allIds.filter((entityId) => id !== entityId)

    this.entities = { ...this.entities, ...entityTypeSet }
  }
}

module.exports = EntitySet
