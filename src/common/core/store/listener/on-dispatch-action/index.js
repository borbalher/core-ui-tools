/**
 * @implements {superhero/core/eventbus/observer}
 */
class DispatchObserver
{
  constructor(store)
  {
    this.store = store
  }

  execute(event)
  {
    const { data: { action } } = event
    this.store.dispatch(action)
  }
}

module.exports = DispatchObserver
