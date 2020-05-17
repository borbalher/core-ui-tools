class UI
{
  constructor(id, initialViewModel, treeFactory, jsonToTree, object, configuration, componentFactory, componentRepository, locator)
  {
    this.tree                 = this.createTreeFromContext(initialViewModel)
    this.componentRepository  = componentRepository
    this.componentFactory     = componentFactory
    this.configuration        = configuration
    this.treeFactory          = treeFactory
    this.jsonToTree           = jsonToTree
    this.locator              = locator
    this.object               = object
    this[Symbol.for('id')]    = id
  }

  createTreeFromContext(context)
  {
    const { nodes, edges, root } = this.jsonToTree.convert(context)
    return this.treeFactory.create(nodes, edges, root)
  }

  update(viewModel)
  {
    this.bootstrap()

    const
    previousTree = this.tree
    this.tree    = this.createTreeFromContext(viewModel)

    const path = this.tree.bfs(this.tree.root).shift()

    let exclude = []
    for(const componentId of path)
    {
      const
      previousComponentData = previousTree.nodes.getItem(componentId),
      newComponentData      = this.tree.nodes.getItem(componentId)

      if(!this.object.isEqual(previousComponentData, newComponentData) && exclude.indexOf(componentId) === -1)
        exclude = [...exclude,  this.onComponentChange(componentId, previousComponentData, newComponentData)]
    }
  }

  onComponentChange(componentId, previousComponentData, newComponentData)
  {
    const componentData = this.getComponentData(componentId)

    let subtreePath = []

    const component = this.getComponent(componentId)

    component.emit('component.changed', {
      previous : previousComponentData,
      current  : newComponentData
    })

    if(componentData.renderOnChange)
    {
      component.render()

      subtreePath = this.tree.bfs(componentId)
      for(const subtreePathId of subtreePath)
      {
        const subtreePathComponent = this.getComponent(subtreePathId)
        subtreePathComponent.bind()
      }
    }

    return subtreePath
  }

  bootstrap()
  {
    this.components.reset()

    const
    root = this.tree.root,
    path = this.tree.bfs(root)

    for(const componentId of path.reverse())
    {
      const
      data      = this.getComponentData(componentId),
      component = this.componentFactory.create(data)(this)

      this.normalizer.normalize()
      this.components.addItem(componentId, component)
    }
  }

  getComponent(componentId)
  {
    return this.componentRepository.getComponent(componentId)
  }

  setComponentData(component)
  {
    this.tree.addNode(component)
  }

  // getComponentData(componentId)
  // {
  //   return this.tree.nodes.getItem(componentId)
  // }

  // getParentComponentData(componentId)
  // {
  //   const parent = this.tree.getParent(componentId)

  //   if(parent)
  //     return this.tree.nodes.getItem(parent)
  // }
}

module.exports = UI
