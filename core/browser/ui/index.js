class UI
{
  constructor(treeFactory, hbs, bus, channel, document)
  {
    this.treeFactory = treeFactory
    this.hbs         = hbs
    this.bus         = bus
    this.channel     = channel
    this.document    = document
  }

  getSubtreePath(componentId)
  {
    return this.tree.bfs(componentId)
  }

  getComponent(componentId)
  {
    return this.tree.nodes.getItem(componentId)
  }

  getComponentJSON(componentId)
  {
    const
    component = this.getComponent(componentId),
    json      = this.tree.getJSON({
      node      : componentId,
      flattened : false
    })

    return json[component.name]
  }

  renderComponent(componentId)
  {
    const
    component                 = this.getComponentJSON(componentId),
    renderedComponentTemplate = this.hbs.compilePartial(component.template, component),
    wrapper                   = document.createElement('div')

    wrapper.innerHTML = renderedComponentTemplate.trim()

    this.document.getElementById(componentId).replaceWith(wrapper.firstChild)

    this.channel.emit('component.rendered', { id: componentId, component })
  }

  getTreeFromContext(context)
  {
    const tree = this.treeFactory.create()
    tree.setGraphFromJSON(context)

    return tree.serialize()
  }

  setComponent(componentId, context)
  {
    const { nodes, links } = this.getTreeFromContext(context)

    for(const node of nodes)
      this.tree.addNode(node)

    for(const link of links)
    {
      const index = this.tree.edges.getElementIndex(link.source, link)
      if(index === -1)
        this.tree.addEdge(link)
    }

    this.channel.emit('component.changed', { id: componentId })
  }
}

module.exports = UI
