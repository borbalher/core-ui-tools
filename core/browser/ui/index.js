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

  emit(event, data)
  {
    this.channel.emit(event, data)
  }

  renderComponent(componentId)
  {
    const
    component                 = this.getComponentJSON(componentId),
    renderedComponentTemplate = this.hbs.compilePartial(component.template, component),
    div                       = document.createElement('div')

    div.innerHTML = renderedComponentTemplate.trim()

    const domNode = div.firstChild

    this.document.getElementById(componentId).replaceWith(domNode)

    this.emit('component.rendered', { id: componentId, component })
  }

  setComponent(componentId, component)
  {
    this.tree.nodes.setItem(componentId, component)
    this.emit('component.changed', { id: componentId })
  }

  setUI(ui)
  {
    this.tree = this.treeFactory.create()
    this.tree.setGraphFromJSON(ui)

    const
    componentId    = ui.id,
    componentsPath = this.getSubtreePath(componentId)

    for(const componentPathId of componentsPath)
    {
      if(!this.bus.getChannel(componentPathId))
        this.bus.createChannel(componentPathId)
      else
        this.bus.clear(componentPathId)
    }

    this.emit('ui.changed', { id: componentId })
  }
}

module.exports = UI
