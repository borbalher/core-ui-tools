const AssociativeArray  = require('../../../common/core/data-structure/associative-array')

class UI
{
  constructor(initialViewModel, treeFactory, viewModelToTree, object, locator, configuration, componentFactory)
  {
    this.treeFactory      = treeFactory
    this.viewModelToTree  = viewModelToTree
    this.object           = object
    this.locator          = locator
    this.configuration    = configuration
    this.componentFactory = componentFactory
    this.components       = new AssociativeArray()
    this.tree             = this.createTreeFromContext(initialViewModel)

    const { nodes, edges, root } = this.viewModelToTree.map(initialViewModel)
    this.tree = this.treeFactory.create(nodes, edges, root)

    this[Symbol.for('id')] = `${new URL(window.location.href).pathname.slice(1)}-page`
  }

  createTreeFromContext(context)
  {
    const { nodes, edges, root } = this.viewModelToTree.map(context)
    return this.treeFactory.create(nodes, edges, root)
  }

  update(viewModel)
  {
    const
    newTree       = this.createTreeFromContext(viewModel),
    previousTree  = this.tree

    this.tree     = newTree

    const
    path    = newTree.bfs(newTree.root),
    exclude = []

    path.shift()

    for(const componentId of path)
    {
      const
      previousNode        = previousTree.nodes.getItem(componentId),
      previousNodeContext = previousTree.getJSON(componentId, false)[previousNode.name],
      newNode             = newTree.nodes.getItem(componentId),
      newNodeContext      = newTree.getJSON(componentId, false)[newNode.name]

      if(!this.object.isEqual(previousNodeContext, newNodeContext) && exclude.indexOf(componentId) === -1)
      {
        const edges = this.tree.edges.getItem(componentId) || []
        for(const edge of edges)
          exclude.push(edge.target)

        this.setComponent(componentId, newNodeContext)
        this.renderComponent(componentId)
        this.bindComponent(componentId)

        this.components.getItem(componentId)
      }
    }
  }

  createTreeFromContext(context)
  {
    const { nodes, edges, root } = this.viewModelToTree.map(context)
    return this.treeFactory.create(nodes, edges, root)
  }

  bootstrap()
  {
    const
    root = this.tree.root,
    path = this.tree.bfs(root).reverse()
    for(const componentId of path)
    {
      const
      componentData = this.getComponentData(componentId),
      component     = this.componentFactory.create(componentData)

      this.components.setItem(componentId, component)
    }
  }

  getComponent(componentId)
  {
    return this.components.setItem(componentId)
  }

  setComponentData(component)
  {
    this.tree.addNode(component)
  }

  getComponentData(componentId)
  {
    return this.tree.nodes.getItem(componentId)
  }

  setComponentContext(context)
  {
    const { nodes, edges } = this.viewModelToTree.map(context)

    for(const node of nodes)
      this.tree.addNode(node)

    for(const edge of edges)
      this.tree.addEdge(edge)
  }

  getComponentContext(componentId)
  {
    const
    { name } = this.getComponentData(componentId),
    json     = this.tree.getJSON(componentId, false)

    return json[name]
  }
}

module.exports = UI
