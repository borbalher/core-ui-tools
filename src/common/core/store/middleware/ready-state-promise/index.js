/**
 * Lets you dispatch special actions with a { promise } field.
 *
 * This middleware will turn them into a single action at the beginning,
 * and a single success (or failure) action when the `promise` resolves.
 *
 * For convenience, `dispatch` will return the promise so the caller can wait.
 */
const readyStatePromise = store => next => action =>
{
  if(!action.meta.promise)
    return next(action)

  const composeAction = (ready, data = {}) =>
  {
    return store.composeAction(action.name, { ...action.data, ...data }, { promise: undefined, ready })
  }

  next(composeAction(false))

  return action.promise
    .then(response =>
    {
      return next(composeAction(true, { response }))
    })
    .catch(error =>
    {
      return next(composeAction(true, { error }))
    })
}

module.exports = readyStatePromise
