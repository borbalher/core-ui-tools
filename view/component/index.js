class Component
{
  constructor(ui, bus)
  {
    this.ui  = ui
    this.bus = bus
  }

  emit(channelId, name, data)
  {
    this.bus.emit(channelId, name, data)
  }

  getComponent(componentId)
  {
    return this.ui.getComponent(componentId)
  }

  setComponent(componentId, state)
  {
    this.ui.state(componentId, state)
  }
}

module.exports = Component
