class Store
{
  constructor({
    eventComposer,
    middlewares,
    deepmerge,
    entitySet,
    deepfind,
    reducer,
    channel,
    options,
    locator,
    state
  })
  {
    this.channel       = channel
    this.state         = state
    this.states        = [state]
    this.reducer       = reducer
    this.locator       = locator
    this.deepfind      = deepfind
    this.deepmerge     = deepmerge
    this.entitySet     = entitySet
    this.eventComposer = eventComposer
    this.options       = options  // TODO SHOULD WE LOCK OPTIONS?

    if(middlewares)
      this.applyMiddlewares(middlewares)
  }

  checkStatesLength()
  {
    const { stateLimit } = this.options
    if(stateLimit && stateLimit > this.states.length)
    {
      const
      states        = [...this.states],
      startPosition = states.length - stateLimit

      this.states  = states.slice(startPosition)
    }
  }

  setState(state)
  {
    this.states = [...this.states, state]
    this.state  = state

    this.checkStatesLength()
    this.updateEntitySet()

    const eventChanged = this.eventComposer.compose('state.changed', { state })
    this.channel.emit(eventChanged)
  }

  updateEntitySet()
  {
    this.entitySet.update(this.state.entities)
  }

  getState()
  {
    return { ...this.state }
  }

  getSubstate(path)
  {
    return this.deepfind.find(path, this.getState())
  }

  getEntityType(schemaName)
  {
    return this.entitySet.getEntityType(schemaName)
  }

  getEntity(schemaName, id)
  {
    return this.entitySet.getEntity(schemaName, id)
  }

  getEntityContext(schemaName, id)
  {
    return this.entitySet.getEntityContext(schemaName, id)
  }

  addEntitiesToState(entities)
  {
    this.entitySet.addEntities(entities)
    return { ...this.state, entities: this.entitySet.entities }
  }

  addEntityToState(schemaName, id, entity)
  {
    this.entitySet.addEntity(schemaName, id, entity)
    return { ...this.state, entities: this.entitySet.entities }
  }

  removeEntityFromState(schemaName, id)
  {
    this.entitySet.removeEntity(schemaName, id)
    return { ...this.state, entities: this.entitySet.entities }
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

  addEntityContextToState(schemaName, context)
  {
    this.entitySet.addEntityContext(schemaName, context)
    return { ...this.state, entities: this.entitySet.entities }
  }
}

module.exports = Store
