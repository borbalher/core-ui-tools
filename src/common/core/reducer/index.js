class Reducer
{
  constructor(actions, locator)
  {
    this.actions = actions
    this.locator = locator
  }

  getReducer(action)
  {
    const service = this.actions[action]

    if(service)
      return this.locator.locate(service)
  }

  apply(action, state)
  {
    const
    { meta: { name } } = action,
    reducer            = this.getReducer(name),
    newState           = reducer ? reducer.execute(action, state) : state
    return newState
  }
}

module.exports = Reducer
