class Page
{
  constructor({
    controllerRepository,
    initialViewModel,
    componentFactory,
    treeFactory,
    jsonToTree,
    composer,
    channel,
    object,
    schema,
    id
  })
  {
    this.initialViewModel       = initialViewModel
    this.componentFactory       = componentFactory
    this.treeFactory            = treeFactory
    this.controllers            = controllerRepository
    this.jsonToTree             = jsonToTree
    this.composer               = composer
    this.channel                = channel
    this.object                 = object

    this.tree                   = this.createTreeFromContext(initialViewModel)

    this[Symbol.for('schema')]  = schema
    this[Symbol.for('id')]      = id
  }

  createTreeFromContext(context)
  {
    const { nodes, edges, root } = this.jsonToTree.convert(context)
    return this.treeFactory.create(nodes, edges, root)
  }

  update(previous, current)
  {
    this.bootstrap()

    const
    previousTree = this.createTreeFromContext(previous),
    currentTree  = this.createTreeFromContext(current),
    path         = currentTree.bfs(currentTree.root).shift()

    let exclude = []
    for(const componentId of path)
    {
      const
      previous = previousTree.nodes.getItem(componentId),
      current  = currentTree.nodes.getItem(componentId)

      if(!this.object.isEqual(previous, current) && exclude.indexOf(componentId) === -1)
        exclude = [...exclude,  this.onComponentChange(componentId, previous, current)]
    }
  }

  onComponentChange(componentId, previous, current)
  {
    const data = this.getData(componentId)

    let subtreePath = []

    const component = this.getController(componentId)

    component.emit('component.changed', { previous, current })

    if(data.renderOnChange)
    {
      component.render()

      subtreePath = this.tree.bfs(componentId)
      for(const componentId of subtreePath)
      {
        const subtreeComponent = this.getController(componentId)
        subtreeComponent.bind()
      }
    }

    return subtreePath
  }

  bootstrap()
  {
    const
    root = this.tree.root,
    path = this.tree.bfs(root)

    if(path)
    {
      for(const componentId of path.reverse())
      {
        const
        data      = this.getData(componentId),
        component = this.componentFactory.create(data)

        this.controllers.setController(componentId, component)
      }
    }
  }

  getController(componentId)
  {
    return this.controllers.getController(componentId)
  }

  setData(component)
  {
    this.tree.addNode(component)
  }

  getData(componentId)
  {
    return this.tree.nodes.getItem(componentId)
  }

  setContext(context)
  {
    const { nodes, edges } = this.viewModelToTree.map(context)

    for(const node of nodes)
      this.tree.addNode(node)

    for(const edge of edges)
      this.tree.addEdge(edge)

    this.onComponentChange(context.id)
  }

  getContext(componentId)
  {
    const
    { name } = this.getData(componentId),
    json     = this.tree.getJSON(componentId, false)

    return json[name]
  }

  emit(name, data)
  {
    this.channel.emit(name, data)
  }
}

module.exports = Page
