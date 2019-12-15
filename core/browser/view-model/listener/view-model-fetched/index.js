/**
 * @implements {superhero/core/eventbus/observer}
 */
class ViewModelFetchedObserver
{
  constructor(viewModel)
  {
    this.viewModel = viewModel
  }

  execute(event)
  {
    this.viewModel.setViewModel(event.data.viewModel)
  }
}

module.exports = ViewModelFetchedObserver
