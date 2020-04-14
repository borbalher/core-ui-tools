/**
 * @implements {superhero/core/eventbus/observer}
 */
class LoadStateObserver
{
  constructor(store, repository)
  {
    this.store      = store
    this.repository = repository
  }

  async execute()
  {
    const state  = await this.repository.fetchState()
    this.store.setState(state)
  }
}

module.exports = LoadStateObserver
