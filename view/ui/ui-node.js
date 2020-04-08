class Node
{
  constructor(id, name, channel)
  {
    this.id      = id
    this.name    = name
    this.channel = channel
  }

  emit(name, data)
  {
    this.channel.emit(name, data)
  }

  getComponent()
  {
    return this.ui.getComponent(this.id)
  }

  setComponent(componentId, component)
  {
    this.ui.setComponent(componentId, component)
  }

  getComponentJSON(componentId)
  {
    return this.ui.getComponentJSON(componentId)
  }
}

module.exports = Node
