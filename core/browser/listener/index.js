/**
 * @implements {superhero/core/eventbus/observer}
 */
class Listener
{
  constructor(bus, ui, configuration, locator)
  {
    this.bus           = bus
    this.ui            = ui
    this.configuration = configuration
    this.locator       = locator
  }

  addComponentObservers(listenToChannels, emitToChannels, event, map, locator, mapper)
  {
    for(const listenToChannel of listenToChannels)
      this.addComponentObserver(listenToChannel, emitToChannels, event, map, locator, mapper)
  }

  addComponentObserver(listenToChannel, emitToChannels, eventName, map, locator, mapper)
  {
    for(const emitToChannel of emitToChannels)
    {
      const
      observer    = locator ? this.locator.locate(locator) : undefined,
      eventMapper = mapper ? this.locator.locate(mapper) : undefined

      this.bus.on(listenToChannel, eventName, observer ? observer.execute.bind(observer) : (event) =>
      {
        this.bus.emit(emitToChannel, map  ? map : eventName, eventMapper ? eventMapper.map(event.data) : event.data)
      })
    }
  }

  isComponent(element)
  {
    return typeof element === 'object' &&
           element.hasOwnProperty('id') &&
           element.hasOwnProperty('name')
  }

  getComponentIdByName(componentId, name)
  {
    const props = this.ui.getComponentContext(componentId)

    if(this.isComponent(props[name]))
      return props[name].id

    return name
  }

  getChannels(emitTo, component)
  {
    if(Array.isArray(emitTo))
    {
      let channels = []
      for(const channelId in emitTo)
        channels = [...channels, this.getChannels(channelId, component)]

      return channels
    }
    else if(typeof emitTo === 'string')
    {
      switch(emitTo)
      {
      case 'self' : return [component.id]
      default     : return [this.getComponentIdByName(component.id, emitTo)]
      }
    }

    return [component.id]
  }

  getObservers(component)
  {
    const observers = this.configuration.find(`core.browser.listener.${component}`)
    return Array.isArray(observers) ? observers : []
  }

  listen(id)
  {
    const path  = this.ui.getSubtreePath(id)

    for(const componentId of path)
    {
      if(!this.bus.getChannel(componentId))
        this.bus.createChannel(componentId)
      else
        this.bus.clear(componentId)

      const
      component                 = this.ui.getComponent(componentId),
      { id, schema, template }  = component,
      schemaObservers           = this.getObservers(schema),
      templateObservers         = schema !== template ? this.getObservers(template)  : [],
      observers                 = [...schemaObservers, ...templateObservers]

      if(observers)
      {
        for(const { listenTo, event, map, emitTo, locator, mapper } of observers)
        {
          const
          listenToChannels = listenTo ? this.getChannels(listenTo, component) : [id],
          emitToChannels   = emitTo   ? this.getChannels(emitTo, component)   : [id]

          this.addComponentObservers(listenToChannels, emitToChannels, event, map, locator, mapper)
        }
      }

      this.channel.emit('added.component.listeners', { id })
    }
  }
}

module.exports = Listener
