/**
 * Lets you dispatch special actions with a { promise } field.
 *
 * This middleware will turn them into a single action at the beginning,
 * and a single success (or failure) action when the `promise` resolves.
 *
 * For convenience, `dispatch` will return the promise so the caller can wait.
 */
class ReadyStatePromiseMiddleware
{
  middleware()
  {
    return store => next => action =>
    {
      if(!action.meta.promise)
        return next(action)

      const promiseAction = store.composeAction(action.name, action.data, { promise: undefined, ready: false })

      next(promiseAction)

      return action.meta.promise
        .then(response =>
        {
          const successAction = store.composeAction(`${action.name}.success`, { response }, { ready: true })
          return next(successAction)
        })
        .catch(error =>
        {
          const errorAction = store.composeAction(`${action.name}.error`, { error }, { ready: true })
          return next(errorAction)
        })
    }
  }
}

module.exports = ReadyStatePromiseMiddleware
