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
  constructor(actionComposer)
  {
    this.actionComposer = actionComposer
  }

  middleware()
  {
    return store => next => action =>
    {
      if(!action.meta.promise)
        return next(action)

      const promiseAction = this.actionComposer.compose(action.meta.name, action.data, { ...action.meta, promise: undefined, ready: false })

      next(promiseAction)

      return action.meta.promise
        .then(response =>
        {
          const successAction = this.actionComposer.compose(`${action.meta.name}.success`, { ...action.data, response }, { ...action.meta, ready: true })
          return next(successAction)
        })
        .catch(error =>
        {
          const errorAction = this.actionComposer.compose(`${action.meta.name}.error`, { ...action.data, error }, { ...action.meta, ready: true })
          return next(errorAction)
        })
    }
  }
}

module.exports = ReadyStatePromiseMiddleware
