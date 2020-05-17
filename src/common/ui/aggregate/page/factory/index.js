class PageFactory
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
      id
    } = component,
    channel = this.createBusChannel(id),
    Page    = this.locator.locate(template)

    return (ui) =>
    {
      return new Page(id, this.bus, this.store, this.hbs, this.deepfind, ui, channel, bindings, listeners, this.locator)
    }
  }
}

module.exports = PageFactory
