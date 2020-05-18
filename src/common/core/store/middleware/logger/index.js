/**
 * Logs all actions and states after they are dispatched.
 */
class LoggerMiddleware
{
  middleware()
  {
    return store => next => action =>
    {
      console.group(action.meta.name)
      console.info('dispatching', action)
      let nextState = next(action)
      console.log('next state', store.getState())
      console.groupEnd()

      return nextState
    }
  }
}

module.exports = LoggerMiddleware
