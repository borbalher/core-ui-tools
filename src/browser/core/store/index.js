class Store
{
  constructor(bus, middlewares, reducer, locator)
  {
    this.bus        = bus
    this.states     = []
    this.reducer    = reducer
    this.locator    = locator

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
