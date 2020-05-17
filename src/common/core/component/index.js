class ComponentControllerRepository
{
  constructor(components, store)
  {
    this.store      = store
    this.components = components
  }

  getEntityType(schemaName)
  {
    const match = /entity\/(.+)/.exec(schemaName)
    if(match)
      return match[1]
  }

  setComponent(id, component)
  {
    this.components.setItem(id, component)
  }

  reset()
  {
    this.components.clear()
  }

  getComponentController(id)
  {
    this.components.getItem(id)
  }

  getComponent(schemaName, id)
  {
    const type = this.getEntityType(schemaName)
    return this.store.getEntity(type, id)
  }

  getComponentContext(schemaName, id)
  {
    const type = this.getEntityType(schemaName)
    return this.store.getEntityContext(type, id)
  }

  setComponentData(entity, schemaName)
  {
    this.store.setEntity(entity, schemaName)
  }

  update(previous, current)
  {
    const
    previousTree = this.createTreeFromContext(previous),
    currentTree  = this.createTreeFromContext(current)

    let path = currentTree.bfs(currentTree.root)
    this.bootstrap(path)
    path         = path.shift()

    let exclude = []
    for(const componentId of path)
    {
      const
      previousComponentData = previousTree.nodes.getItem(componentId),
      newComponentData      = currentTree.nodes.getItem(componentId)

      if(!this.object.isEqual(previousComponentData, newComponentData) && exclude.indexOf(componentId) === -1)
        exclude = [...exclude,  this.onComponentChange(componentId, previousComponentData, newComponentData)]
    }
  }

  bootstrap(path)
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
}

module.exports = ComponentControllerRepository
