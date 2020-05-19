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

  getControllerClass(template)
  {
    try
    {
      return this.locator.locate(`ui/${template}/controller`)
    }
    catch(error)
    {
      console.warn(`Using basic controller instead ${template} controller`)
      return this.locator.locate('ui/component/controller')
    }
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
    Controller = this.getControllerClass(template)

    return (page) =>
    {
      return new Controller(id, schema, bindings, listeners, this.bus, this.store, this.hbs,  channel, this.locator, page)
    }
  }
}

module.exports = ComponentFactory
