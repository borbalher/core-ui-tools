/**
 * @implements {superhero/core/eventbus/observer}
 */
class FetchStateObserver
{
  constructor(store)
  {
    this.store = store
  }

  execute()
  {
    this.store.fetchState()
  }
}

module.exports = FetchStateObserver
