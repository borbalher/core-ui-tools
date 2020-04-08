/**
 * @implements {superhero/core/eventbus/observer}
 */
class ViewModelFetcherObserver
{
  constructor(viewModel, repository)
  {
    this.viewModel  = viewModel
    this.repository = repository
  }

  execute()
  {
    this.repository.fetchViewModel()
      .then((viewModel) =>
      {
        this.viewModel.setViewModel(viewModel)
      })
      .catch((error) =>
      {
        console.error(error)
      })
  }
}

module.exports = ViewModelFetcherObserver
