/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnStateChangedObserver
{
  constructor(store, viewModel)
  {
    this.store     = store
    this.viewModel = viewModel
  }

  execute(event)
  {
    const viewModel = this.store.getEntityContext(this.viewModel[Symbol.for('schema')], this.viewModel[Symbol.for('id')])
    this.viewModel.setViewModel(viewModel)
  }
}

module.exports = OnStateChangedObserver
