/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action =>
{
  console.group(action.meta.name)
  console.info('dispatching', action)
  let nextState = next(action)
  console.log('next state', store.getState())
  console.groupEnd()

  return nextState
}

module.exports = logger
