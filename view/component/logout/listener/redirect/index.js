/**
 * @implements {superhero/core/eventbus/observer}
 */
class RedirectObserver
{
  execute()
  {
    location.reload(true)
  }
}

module.exports = RedirectObserver
