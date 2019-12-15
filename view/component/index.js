class Component
{
  constructor(dom, bus)
  {
    this.dom = dom
    this.bus = bus
  }

  emit(channelId, name, data)
  {
    this.bus.emit(channelId, name, data)
  }

  getComponentNode(componentId)
  {
    return this.dom.getNode(componentId)
  }

  setComponentNode(componentId, componentNode)
  {
    this.dom.setDOMNode(componentId, componentNode)
  }
}

module.exports = Component
