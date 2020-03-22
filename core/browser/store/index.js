class Store
{
  constructor(deepclone, channel, middlewares, reducer, locator)
  {
    this.deepclone  = deepclone
    this.reducer    = reducer
    this.channel    = channel
    this.states     = []
    this.state      = undefined
    this.locator    = locator
    this.applyMiddleware(middlewares)
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
    const middlewares = middlewares.map((middleware) =>
    {
      return this.locator.locate(middleware)
    }).reverse()

    let dispatch = (action) => {
      const state = this.reducer.apply(action, this)
    }

    for(const middleware of middlewares)
    {
      dispatch = middleware(this)(dispatch)
    }

    this.dispatch = dispatch
  }
}

module.exports = Store
