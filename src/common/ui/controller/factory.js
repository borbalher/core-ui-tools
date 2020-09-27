const Component = require('./component')
class ComponentFactory
{
  constructor(configuration, bus, locator, store, hbs, deepfind, eventComposer, actionComposer)
  {
    this.configuration  = configuration
    this.bus            = bus
    this.locator        = locator
    this.store          = store
    this.hbs            = hbs
    this.deepfind       = deepfind
    this.eventComposer  = eventComposer
    this.actionComposer = actionComposer
  }

  createBusChannel(id)
  {
    return this.bus.createChannel(id)
  }

  getComponentClass(template)
  {
    try
    {
      return this.locator.locate(`ui/${template}/controller`)
    }
    catch(error)
    {
      console.warn(`Using basic controller instead ${template} controller`)
      return Component
    }
  }

  create(initialState)
  {
    const
    {
      template,
      id
    } = initialState,
    channel   = this.createBusChannel(id),
    Component = this.getComponentClass(template)

    return Component({
      actionComposer : this.actionComposer,
      bus            : this.bus,
      channel,
      eventComposer  : this.eventComposer,
      hbs            : this.hbs,
      initialState,
      locator        : this.locator,
      store          : this.store,
    })
  }
}

module.exports = ComponentFactory
