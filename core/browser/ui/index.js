class UI
{
  constructor(treeFactory, hbs, bus, channel)
  {
    this.treeFactory = treeFactory
    this.hbs         = hbs
    this.bus         = bus
    this.channel     = channel
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
    renderedComponentTemplate = this.hbs.compileTemplate(componentTreeInJSON.template, component)

    this.document.getElementById(componentId).innerHTML = renderedComponentTemplate

    this.emit('component.rendered', { id: componentId, component })
  }

  setComponent(componentId, component)
  {
    this.tree.nodes.setItem(componentId, component)
    this.emit('component.changed', { id: componentId })
  }

  setUI(ui)
  {
    for(const componentId in this.tree.nodes)
    {
      this.bus.deleteChannel(componentId)
    }

    this.setGraphFromJSON(ui)

    const
    componentId    = ui.id,
    componentsPath = this.getSubtreePath(componentId)

    for(const componentPathId of componentsPath)
    {
      if(!this.bus.getChannel(componentPathId))
        this.bus.createChannel(componentPathId)
      else
        this.bus.reset(componentPathId)
    }

    this.emit('ui.changed', { id: componentId })
  }
}

module.exports = UI
