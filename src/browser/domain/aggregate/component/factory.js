class ComponentFactory
{
  constructor(configuration, bus, locator, store, hbs)
  {
    this.configuration = configuration
    this.bus           = bus
    this.locator       = locator
    this.store         = store
    this.hbs           = hbs
  }

  getBindings(schema)
  {
    const bindings = this.configuration.find(`core.ui.${schema}.bindings`)
    return Array.isArray(bindings) ? bindings : []
  }

  getListeners(schema)
  {
    const listeners = this.configuration.find(`core.ui.${schema}.listeners`)
    return Array.isArray(listeners) ? listeners : []
  }

  createBusChannel(id)
  {
    return this.bus.createChannel(id)
  }

  create(component)
  {
    const
    { id, schema } = component,
    channel        = this.createBusChannel(id),
    bindings       = this.getBindings(schema),
    listeners      = this.getListeners(schema)
    Component      = this.locator.locate(schema)

    return (ui) =>
    {
      return new Component(id, this.bus, this.store, this.hbs, ui, channel, bindings, listeners, this.locator)
    }
  }
}

module.exports = ComponentFactory
