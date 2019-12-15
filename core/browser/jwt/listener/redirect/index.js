/**
 * @implements {superhero/core/eventbus/observer}
 */
class RedirectObserver
{
  execute()
  {
    const
    url      = new URL(window.location.href),
    callback = url.searchParams.get('callback')

    if(callback)
    {
      document.location.href = callback.toString()
    }
    else
    {
      url.searchParams.delete('code')
      document.location.href = url.toString()
    }
  }
}

module.exports = RedirectObserver
