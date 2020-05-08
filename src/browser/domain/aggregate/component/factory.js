class ComponentFactory
{
  constructor(configuration, bus, locator, store, hbs, deepfind)
  {
    this.configuration = configuration
    this.bus           = bus
    this.locator       = locator
    this.store         = store
    this.hbs           = hbs
    this.deepfind      = deepfind
  }

  getBindings(template)
  {
    const bindings = this.configuration.find(`core.ui.${template}.bindings`)
    return Array.isArray(bindings) ? bindings : []
  }

  getListeners(template)
  {
    const listeners = this.configuration.find(`core.ui.${template}.listeners`)
    return Array.isArray(listeners) ? listeners : []
  }

  createBusChannel(id)
  {
    return this.bus.createChannel(id)
  }

  create(component)
  {
    const
    { id, template } = component,
    channel          = this.createBusChannel(id),
    bindings         = this.getBindings(template),
    listeners        = this.getListeners(template),
    Component        = this.locator.locate(template)

    return (ui) =>
    {
      return new Component(id, this.bus, this.store, this.hbs, this.deepfind, ui, channel, bindings, listeners, this.locator)
    }
  }
}

module.exports = ComponentFactory
