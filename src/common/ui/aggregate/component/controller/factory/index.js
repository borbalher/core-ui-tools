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
    channel    = this.createBusChannel(id),
    Controller = this.locator.locate(`ui/${template}/controller`)

    return (page) =>
    {
      return new Controller(id, schema, bindings, listeners, this.bus, this.store, this.hbs,  channel, page, this.locator)
    }
  }
}

module.exports = ComponentFactory
