/**
 * @implements {superhero/core/eventbus/observer}
 */
class FetchStateObserver
{
  constructor(store, repository)
  {
    this.store      = store
    this.repository = repository
  }

  execute()
  {
    this.repository.fetchState()
      .then((state) =>
      {
        this.store.setState(state)
      })
      .catch((error) =>
      {
        console.error(error)
      })
  }
}

module.exports = FetchStateObserver
