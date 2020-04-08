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

    this.channel.emit('view.model.changed', { viewModel })
  }

  getViewModel()
  {
    return { ...this.viewModel }
  }
}

module.exports = ViewModel
