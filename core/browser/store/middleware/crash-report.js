/**
 * Sends crash reports as state is updated and listeners are notified.
 */
const crashReport = store => next => action =>
{
  try
  {
    return next(action)
  }
  catch(error)
  {
    console.error('EXCEPTION', {
      error,
      action,
      state : store.getState()
    })

    throw err
  }
}

module.exports = crashReport