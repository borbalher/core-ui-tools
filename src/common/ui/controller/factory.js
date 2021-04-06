const ComponentController = require('./component')
class ComponentControllerFactory
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

  getControllerClass(template)
  {
    try
    {
      return this.locator.locate(`ui/controller/${template}`)
    }
    catch(error)
    {
      console.warn(`Using basic controller instead ${template} controller`)
      return ComponentController
    }
  }

  create(component)
  {
    const
    {
      template,
      id
    } = component,
    channel    = this.createBusChannel(id),
    Controller = this.getControllerClass(template)

    return (virtualDOM) =>
    {
      return new Controller(component, this.bus, this.store, this.hbs,  channel, this.locator, virtualDOM, this.actionComposer, this.eventComposer)
    }
  }
}

module.exports = ComponentControllerFactory
