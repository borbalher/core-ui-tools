class DOM
{
  constructor(treeFactory, hbs, bus)
  {
    this.treeFactory = treeFactory
    this.hbs         = hbs
    this.bus         = bus
  }

  getSubtreePath(nodeId)
  {
    return this.tree.bfs(nodeId)
  }

  getNode(id)
  {
    return this.tree.nodes.getItem(id)
  }

  getNodeProps(id)
  {
    const
    node = this.getNode(id),
    json = this.tree.getJSON({
      node      : id,
      flattened : false
    })

    return json[node.name]
  }


  emit(eventName, data)
  {
    this.bus.emit('dom', eventName, data)
  }

  renderNode(id)
  {
    const
    props            = this.getNodeProps(id),
    renderedTemplate = this.hbs.compileTemplate(props.template, props)

    document.getElementById(id).innerHTML = renderedTemplate

    this.emit('dom.node.rendered', { id })
  }


  setDOMNode(id, node)
  {
    this.tree.nodes.setItem(id, node)

    this.emit('dom.node.changed', { id })
  }

  setDOM(state)
  {
    this.tree = this.treeFactory.create()
    this.tree.setGraphFromJSON(state)

    const
    nodeId   = state.id,
    nodePath = this.getSubtreePath(nodeId)

    for(const nodePathId of nodePath)
    {
      if(!this.bus.getChannel(nodePathId))
        this.bus.createChannel(nodePathId)
      else
        this.bus.reset(nodePathId)
    }

    this.emit('dom.changed', { id: nodeId })
  }
}

module.exports = DOM
