class Reducer
{
  constructor(actions, locator)
  {
    this.actions = actions
    this.locator = locator
  }

  apply(event, state)
  {
    const
    action   = event.meta.name,
    reducer  = this.locator.locate(this.actions[action]),
    newState = reducer.execute(event, state)
    return newState
  }

}

module.exports = Reducer
