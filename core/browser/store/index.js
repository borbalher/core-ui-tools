class Store
{
  constructor(deepclone, channel, middlewares, reducer, locator, repository, composer)
  {
    this.deepclone  = deepclone
    this.reducer    = reducer
    this.channel    = channel
    this.states     = []
    this.state      = {}
    this.locator    = locator
    this.repository = repository
    this.composer   = composer

    if(middlewares)
      this.applyMiddleware(middlewares)
  }

  composeAction(emitter, name, data)
  {
    const
    timestamp = new Date().toISOString(),
    event     = this.composer.compose('core/event-emitter/event', {
      meta : {
        name,
        timestamp,
        emitter
      },
      data
    })

    return event
  }

  setState(state)
  {
    this.states = [...this.states, state]
    this.state  = state
    this.channel.emit('store.state.changed', { state })
  }

  getState()
  {
    return this.deepclone.clone(this.state)
  }

  applyMiddleware(middlewares)
  {
    const chain = middlewares.map((middleware) =>
    {
      return this.locator.locate(middleware)
    }).reverse()

    let dispatch = (action) => {
      const state = this.reducer.apply(action, this.getState())
      this.setState(state)
      return state
    }

    for(const middleware of chain)
    {
      dispatch = middleware(this)(dispatch)
    }

    this.dispatch = dispatch
  }

  emit(name, data)
  {
    this.channel.emit(name, data)
  }

  fetchState()
  {
    this.repository.fetchState()
      .then((state) =>
      {
        this.channel.emit('state.fetched.successfully', { state })
      })
      .catch((error) =>
      {
        this.channel.emit('state.fetched.error', { error })
      })
  }
}

module.exports = Store
