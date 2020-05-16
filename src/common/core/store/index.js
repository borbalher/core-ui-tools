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

  getEntity(type, id)
  {
    const
    state   = this.getState(),
    path    = this.getEntityPath(type, id),
    entity  = this.deepfind.find(path, state)

    return entity
  }

  addEntity(entity, schemaName)
  {
    const
    normalized = this.normalizer.normalize(entity, schemaName),
    state      = this.getState(),
    newState   = this.deepmerge.merge(state, { entities: normalized })

    this.setState(newState)
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
