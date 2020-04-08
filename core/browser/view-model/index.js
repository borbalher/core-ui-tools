class ViewModel
{
  constructor(channel, viewModelComposer)
  {
    this.channel           = channel
    this.viewModelComposer = viewModelComposer
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

  getPage()
  {
    const
    url  = new URL(window.location.href),
    page = `${url.pathname.slice(1)}-page`

    return page
  }

  composeViewModel(state)
  {
    const
    page      = this.getPage(),
    viewModel = this.viewModelComposer.compose(page, state)

    this.viewModel.setViewModel(viewModel)
    this.channel.emit('view.model.composed', { viewModel })
  }
}

module.exports = ViewModel
