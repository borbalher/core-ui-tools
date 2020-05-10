class Store
{
  constructor(state, bus, middlewares, reducer, locator)
  {
    this.bus        = bus
    this.state      = state
    this.states     = [state]
    this.reducer    = reducer
    this.locator    = locator

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
