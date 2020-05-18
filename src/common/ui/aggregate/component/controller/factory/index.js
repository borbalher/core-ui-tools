class ComponentFactory
{
  constructor(configuration, bus, locator, store, hbs, deepfind, page)
  {
    this.configuration = configuration
    this.bus           = bus
    this.locator       = locator
    this.store         = store
    this.hbs           = hbs
    this.deepfind      = deepfind
    this.page          = page
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

    return new Controller(id, schema, bindings, listeners, this.bus, this.store, this.hbs,  channel, this.page, this.locator)
  }
}

module.exports = ComponentFactory
