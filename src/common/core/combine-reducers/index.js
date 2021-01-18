const combineReducers = ({
  reducers,
  nested = false
}) =>
{
  const combinedReducers = {}

  for(const [key, reducer] of Object.entries(reducers))
  {
    if(reducer && typeof reducer.reduce === 'function')
    {
      const reducerInitialState = reducer.reduce({
        action : { meta: { name: 'INIT_CHECK' } },
        state  : undefined
      })

      if(typeof reducerInitialState === 'undefined')
        console.warning(`Reducer ${key} returns undefined`)
      else
        combinedReducers[key] = reducers[key]
    }
    else
    {
      console.warning(`No reducer provided for key "${key}"`)
    }
  }

  return ({
    action,
    state,
    ...args
  }) =>
  {
    // TODO Add action/state validation

    if(nested)
    {
      const nextState = {}

      for(const [key, reducer] of Object.entries(reducers))
      {
        const
        previousStateForKey = state[key],      // Get the the previous state
        nextStateForKey     = reducer.reduce({ // Get the next state by running the reducer
          action,
          state : previousStateForKey,
          ...args
        })

        nextState[key] = nextStateForKey // Update the new state for the current reducer
      }

      return nextState
    }
    else
    {
      let currentState = state

      for(const reducer of reducers)
      {
        const nextState = reducer.reduce({
          action,
          state : currentState,
          ...args
        })

        currentState = nextState // Update the new state for the current reducer
      }

      return currentState
    }
  }
}

module.exports = combineReducers
