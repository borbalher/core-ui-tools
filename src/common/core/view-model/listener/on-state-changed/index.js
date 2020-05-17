/**
 * @implements {superhero/core/eventbus/observer}
 */
class OnStateChangedObserver
{
  constructor(viewModel)
  {
    this.viewModel = viewModel
  }

  execute(event)
  {
    const { data : { state } } = event
    this.viewModel.setViewModel(state)
  }
}

module.exports = OnStateChangedObserver
