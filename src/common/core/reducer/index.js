const ActionUndefinedError = require('./error/action-undefined')

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

    if(!service)
      throw new ActionUndefinedError(`Action "${action}" does not exist`)

    return this.locator.locate(service)
  }

  apply(action, state)
  {
    const
    { meta: { name } } = action,
    reducer            = this.getReducer(name),
    newState           = reducer.execute(action, state)
    return newState
  }
}

module.exports = Reducer
