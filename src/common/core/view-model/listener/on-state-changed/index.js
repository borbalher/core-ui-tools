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
    this.viewModel.setViewModelFromState(state)
  }
}

module.exports = OnStateChangedObserver
