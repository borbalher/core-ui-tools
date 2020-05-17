class ViewModel
{
  constructor({
    initialViewModel = {},
    treeFactory,
    jsonToTree,
    composer,
    channel,
    schema,
    id
  })
  {
    this.composer               = composer
    this.treeFactory            = treeFactory
    this.jsonToTree             = jsonToTree
    this.viewModel              = initialViewModel
    this.channel                = channel
    this.tree                   = this.createTreeFromViewModel(initialViewModel)
    this[Symbol.for('id')]      = id
    this[Symbol.for('schema')]  = schema
  }

  createTreeFromViewModel(viewModel)
  {
    const { nodes, edges, root } = this.jsonToTree.convert(viewModel)
    return this.treeFactory.create(nodes, edges, root)
  }

  getViewModel()
  {
    return { ...this.viewModel }
  }

  composeViewModel(state)
  {
    return this.composer.compose(this[Symbol.for('schema')], state)
  }

  setViewModelFromState(state)
  {
    const viewModel = this.composeViewModel(state)
    this.setViewModel(viewModel)
  }

  setViewModel(viewModel)
  {
    const
    previous       = this.viewModel,
    current        = viewModel

    this.viewModel = current
    this.tree      = this.createTreeFromViewModel(viewModel)

    this.channel.emit('view.model.changed', { current, previous })
  }
}

module.exports = ViewModel
