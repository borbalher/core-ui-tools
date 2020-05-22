class ViewModel
{
  constructor({
    initialViewModel = {},
    eventComposer,
    composer,
    channel,
    schema,
    id
  })
  {
    this.eventComposer          = eventComposer
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

    const viewModelChangedEvent = this.eventComposer.compose('view.model.changed', { current, previous })
    this.channel.emit(viewModelChangedEvent)
  }
}

module.exports = ViewModel
