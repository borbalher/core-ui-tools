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
        timestamp : new Date().toISOString(),
        name,
        ...meta
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

  normalizeEntityContext(schemaName, context)
  {
    const
    normalized  = this.normalizer.normalize(context, schemaName)
    // mergedState = this.merge()

    return { entities: normalized }
  }

  merge(state)
  {
    const  mergedState = this.deepmerge.merge(this.getState(), state)
    return mergedState
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
