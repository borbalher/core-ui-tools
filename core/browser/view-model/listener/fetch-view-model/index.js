/**
 * @implements {superhero/core/eventbus/observer}
 */
class ViewModelFetcherObserver
{
  constructor(viewModel)
  {
    this.viewModel = viewModel
  }

  execute()
  {
    this.viewModel.fetchViewModel()
  }
}

module.exports = ViewModelFetcherObserver
