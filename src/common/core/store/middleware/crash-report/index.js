/**
 * Sends crash reports as state is updated and listeners are notified.
 */
class CrashReportMiddleware
{
  middleware()
  {
    return store => next => action =>
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

        throw error
      }
    }
  }
}

module.exports = CrashReportMiddleware
