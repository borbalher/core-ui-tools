const ComponentController = require('.')
class ComponentControllerFactory
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
      return new Controller(component, this.bus, this.store, this.hbs,  channel, this.locator, virtualDOM)
    }
  }
}

module.exports = ComponentControllerFactory
