/**
 * Schedules actions with { meta: { delay: N } } to be delayed by N milliseconds.
 * Makes `dispatch` return a function to cancel the timeout in this case.
 */
const timeoutScheduler = store => next => action =>
{
  if(!action.meta || action.meta.delay === undefined)
    return next(action)

  const timeoutId = setTimeout(() => next(action), action.meta.delay)
  return () => { clearTimeout(timeoutId) }
}

module.exports = timeoutScheduler
