class ViewModel
{
  constructor({
    initialViewModel = {},
    composer,
    channel,
    schema,
    id
  })
  {
    this.viewModel              = initialViewModel
    this.composer               = composer
    this.channel                = channel
    this[Symbol.for('id')]      = id
    this[Symbol.for('schema')]  = schema
  }

  getViewModel()
  {
    return { ...this.viewModel }
  }

  composeViewModel(input = {})
  {
    const viewModel = this.composer.compose(input)
    return viewModel
  }

  setViewModel(state)
  {
    const
    previous       = this.viewModel,
    current        = this.composeViewModel(state)
    this.viewModel = current
    this.channel.emit('view.model.changed', { current, previous })
  }
}

module.exports = ViewModel
