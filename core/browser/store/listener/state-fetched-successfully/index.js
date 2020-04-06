/**
 * @implements {superhero/core/eventbus/observer}
 */
class StateFetchedSuccessfullyObserver
{
  constructor(store)
  {
    this.store = store
  }

  execute(event)
  {
    this.store.setState(event.data.state)
  }
}

module.exports = StateFetchedSuccessfullyObserver
