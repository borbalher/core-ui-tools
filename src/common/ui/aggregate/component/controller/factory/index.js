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

  createBusChannel(id)
  {
    return this.bus.createChannel(id)
  }

  create(component)
  {
    const
    {
      listeners,
      bindings,
      template,
      schema,
      id
    } = component,
    channel   = this.createBusChannel(id),
    Component = this.locator.locate(template)

    return new Component(id, schema, bindings, listeners, this.bus, this.store, this.hbs,  channel, this.locator)
  }
}

module.exports = ComponentFactory
