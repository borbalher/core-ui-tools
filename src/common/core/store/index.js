class Store
{
  constructor(state, bus, middlewares, reducer, deepfind, deepmerge, normalizer, locator)
  {
    this.bus        = bus
    this.state      = state
    this.states     = [state]
    this.reducer    = reducer
    this.locator    = locator
    this.deepfind   = deepfind
    this.deepmerge  = deepmerge
    this.normalizer = normalizer

    if(middlewares)
      this.applyMiddlewares(middlewares)
  }

  composeAction(name, data, meta = {})
  {
    return  {
      meta : {
        ...meta,
        timestamp : new Date().toISOString(),
        name
      },
      data
    }
  }

  dispatchAfter(action)
  {
    setTimeout(() =>
    {
      this.dispatch(action)
    }, 0)
  }

  setState(state)
  {
    this.states = [...this.states, state]
    this.state  = state
    this.bus.emit('state.changed', { state })
  }

  getState()
  {
    return { ...this.state }
  }

  getSubstate(path)
  {
    return this.deepfind.find(path, this.getState())
  }

  getEntityTypePath(type)
  {
    return `entities.${type}`
  }

  getEntityPath(type, id)
  {
    return `entities.${type}.byId.${id}`
  }

  getEntityType(schemaName)
  {
    return this.normalizer.getEntityType(schemaName)
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
    context = this.normalizer.denormalize(entity, schemaName, this.state['entities'])

    return context
  }

  getEntityContextNormalized(schemaName, id)
  {
    const
    entity            = this.getEntity(schemaName, id),
    context           = this.normalizer.denormalize(entity, schemaName, this.state['entities']),
    contextNormalized = this.normalizer.normalize(context, schemaName, this.state['entities'])

    return contextNormalized
  }

  normalizeEntityContext(schemaName, context)
  {
    const
    normalized  = this.normalizer.normalize(context, schemaName)
    // mergedState = this.merge()

    return { entities: normalized }
  }

  getEntities(type)
  {
    if(this.state.entities && this.state.entities[type])
      return { ...this.state.entities[type] }
    else
      return { byId: {}, allIds: [] }
  }

  addEntitiesToState(entities, state)
  {
    const types = Object.keys(entities)

    let stateEntities = { }
    for(const type of types)
      stateEntities = { ...this.addEntitiesToStateByType(type, entities[type], stateEntities) }

    return { ...state, entities: { ...state.entities, ...stateEntities.entities } }
  }

  addEntitiesToStateByType(type, entities, state)
  {
    const stateEntities  = this.getEntities(type)

    stateEntities.byId   = { ...stateEntities.byId, ...entities.byId }
    stateEntities.allIds = [...new Set([...stateEntities.allIds, ...entities.allIds])]

    const entityGroup  = {}
    entityGroup[type]  = stateEntities

    return { ...state, entities: { ...state.entities, ...entityGroup } }
  }

  addEntityToState(type, id, entity, state)
  {
    const entities  = this.getEntities(type)

    entities.byId[id] = { ...entity }
    entities.allIds   = [...new Set([...entities.allIds, entity.id])]

    return { ...state, entities: { ...state.entities, ...entities } }
  }

  removeEntityFromState(type, id, state)
  {
    const entities = this.getEntities(type)

    delete entities.byId[id]
    entities.allIds     = entities.allIds.filter((entityId) => id !== entityId)

    const entityGroup  = {}
    entityGroup[type]  = entities

    return { ...state, entities: { ...state.entities, ...entityGroup } }
  }

  applyMiddlewares(middlewares)
  {
    let dispatch = (action) =>
    {
      const state = this.reducer.apply(action, this.getState())
      this.setState(state)
      return state
    }

    for(const middleware of middlewares)
      dispatch = middleware(this)(dispatch)


    this.dispatch = dispatch
  }
}

module.exports = Store
