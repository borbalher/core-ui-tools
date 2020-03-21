const Tree = require('../../common/data-structure/tree')

class UI extends Tree
{
  constructor(treeFactory, hbs, bus, channel)
  {
    super(composer, deepassign, root)
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

  getComponentState(componentId)
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
    state                     = this.getComponentState(componentId),
    renderedComponentTemplate = this.hbs.compileTemplate(state.template, state)

    this.document.getElementById(componentId).innerHTML = renderedComponentTemplate

    this.emit('component.rendered', { id: componentId, state })
  }

  setComponentState(componentId, state)
  {
    this.tree.nodes.setItem(componentId, state)
    this.emit('component.changed', { id: componentId })
  }

  setUI(state)
  {
    for(const componentId in this.tree.nodes)
    {
      this.bus.deleteChannel(componentId)
    }

    this.setGraphFromJSON(state)

    const
    componentId    = state.id,
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
