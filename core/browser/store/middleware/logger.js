/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action =>
{
  console.log('dispatching', action)
  let nextState = next(action)
  console.log('next state', nextState)
  return nextState
}

module.exports = logger
