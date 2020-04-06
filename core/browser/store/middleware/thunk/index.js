/**
 * Lets you dispatch special actions with a { promise } field.
 *
/**
 * Lets you dispatch a function instead of an action.
 * This function will receive `dispatch` and `getState` as arguments.
 *
 * Useful for early exits (conditions over `getState()`), as well
 * as for async control flow (it can `dispatch()` something else).
 *
 * `dispatch` will return the return value of the dispatched function.
 */
const thunk = store => next => action => {
  if (typeof action === 'function')
    return action(store.dispatch, store.getState)
  else
    return next(action)
}

module.exports = thunk
