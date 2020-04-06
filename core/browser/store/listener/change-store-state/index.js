/**
 * @implements {superhero/core/eventbus/observer}
 */
class ChangeStoreStateObserver
{
  constructor(store)
  {
    this.store = store
  }

  execute(event)
  {
    const state = event.data.viewModel
    this.store.setState(state)
  }
}

module.exports = ChangeStoreStateObserver
