class ViewModel
{
  constructor(bus, repository)
  {
    this.channel    = bus.createChannel('view-model')
    this.repository = repository
  }

  setViewModel(viewModel)
  {
    this.viewModel = viewModel
    this.emit('view-model', 'view.model.changed', { viewModel })
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
        this.emit('view-model', 'view.model.fetched', { viewModel })
      })
      .catch((error) =>
      {
        this.emit('view-model', 'view.model.not.fetched', { error })
        this.emit('app', 'core.error', { error })
      })
  }
}

module.exports = ViewModel
