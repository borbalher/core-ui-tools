class Store
{
  constructor(initialState = {}, bus, middlewares, reducer, locator, repository, composer)
  {
    this.bus        = bus
    this.state      = initialState
    this.states     = []
    this.reducer    = reducer
    this.locator    = locator
    this.composer   = composer
    this.repository = repository

    if(middlewares)
      this.applyMiddlewares(middlewares)
  }

  composeAction(name, data)
  {
    return  {
      meta : {
        timestamp : new Date().toISOString(),
        name
      },
      data
    }
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
