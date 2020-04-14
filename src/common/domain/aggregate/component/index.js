class UIComponent
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

  setComponent(componentId, component)
  {
    this.ui.setComponent(componentId, component)
  }

  getComponentContext(componentId)
  {
    return this.ui.getComponentContext(componentId)
  }
}

module.exports = UIComponent
