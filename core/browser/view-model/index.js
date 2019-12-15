class ViewModel
{
  constructor(deepclone, bus, viewModelFetcher)
  {
    this.deepclone        = deepclone
    this.bus              = bus
    this.viewModelFetcher = viewModelFetcher
  }

  setViewModel(viewModel)
  {
    this.viewModel = viewModel
    this.emit('view-model', 'view.model.changed', { viewModel })
  }

  getViewModel()
  {
    return this.deepclone.clone(this.viewModel)
  }

  emit(channelId, name, data)
  {
    this.bus.emit(channelId, name, data)
  }

  fetchViewModel()
  {
    this.viewModelFetcher.fetch()
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
