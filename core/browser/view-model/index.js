class ViewModel
{
  constructor(channel, repository)
  {
    this.channel    = channel
    this.repository = repository
  }

  setViewModel(viewModel)
  {
    this.viewModel = viewModel
    this.emit('view.model.changed', { viewModel })
  }

  getViewModel()
  {
    return { ...this.viewModel }
  }

  emit(name, data)
  {
    this.channel.emit(name, data)
  }

  fetchViewModel()
  {
    this.repository.fetchViewModel()
      .then((viewModel) =>
      {
        this.emit('view.model.fetched.successfully', { viewModel })
      })
      .catch((error) =>
      {
        this.emit('view.model.fetched.error', { error })
      })
  }
}

module.exports = ViewModel
