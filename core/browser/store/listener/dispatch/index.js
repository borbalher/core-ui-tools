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
    this.store.dispatch(event)
  }
}

module.exports = DispatchObserver
