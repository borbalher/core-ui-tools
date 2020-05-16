class Normalizer
{
  constructor(composer)
  {
    this.composer = composer
  }

  denormalize(data, schemaName, entities)
  {
    const schema = this.composer.composeSchema(schemaName)

    let dto = {}
    for(const attribute in schema)
    {
      const
      isEntity     = this.isEntity(schema[attribute].schema),
      isCollection = schema[attribute].collection,
      type         = schema[attribute].type

      if(type === 'schema' && isEntity && isCollection)
      {
        dto[attribute] = []
        for(const entityId of data[attribute])
        {
          const entity = this.getEntity(entities, schema[attribute].schema, entityId)

          if(entity)
            dto[attribute]  = [...dto[attribute], this.denormalize(entity, schema[attribute].schema, entities)]
        }
      }
      else if(type === 'schema' && isEntity)
      {
        const
        entityId = data[attribute],
        entity   = this.getEntity(entities, schema[attribute].schema, entityId)

        dto[attribute] = this.denormalize(entity, schema[attribute].schema, entities)
      }
      else
      {
        dto[attribute] = data[attribute]
      }
    }

    return dto
  }

  getEntityType(schemaName)
  {
    const match = /entity\/(.+)/.exec(schemaName)
    if(match)
      return match[1]
  }

  isEntity(schemaName)
  {
    const match = /entity\/(.+)/.exec(schemaName)
    return !!match
  }

  addEntity(entities, schemaName, entity)
  {
    const type = this.getEntityType(schemaName)

    if(!entities[type])
      entities[type] = { byId: {}, allIds: [] }

    entities[type].byId[entity.id] = entity
    entities[type].allIds          = [...entities[type].allIds, entity.id]

    return entities
  }

  getEntity(entities, schemaName, id)
  {
    const type = this.getEntityType(schemaName)

    if(entities[type] && entities[type].byId[id])
      return entities[type].byId[id]

    return null
  }

  normalize(data, schemaName, entities = {})
  {
    const schema = this.composer.composeSchema(schemaName)

    let dto = {}
    for(const attribute in schema)
    {
      const
      isEntity     = this.isEntity(schema[attribute].schema),
      isCollection = !!schema[attribute].collection,
      type         = schema[attribute].type

      if(type === 'schema' && isEntity && isCollection)
      {
        dto[attribute] = []
        for(const entity of data[attribute])
        {
          this.normalize(entity, schema[attribute].schema, entities)
          dto[attribute]  = [...dto[attribute], entity.id]
        }
      }
      else if(type === 'schema' && isEntity)
      {
        const entity = data[attribute]
        this.normalize(entity, schema[attribute].schema, entities)
        dto[attribute] = entity.id
      }
      else
      {
        dto[attribute] = data[attribute]
      }
    }

    this.addEntity(entities, schemaName, dto)

    return entities
  }
}

module.exports = Normalizer
