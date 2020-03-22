/**
 * @implements {superhero/core/eventbus/observer}
 */
class AddComponentListenersObserver
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

  getComponentIdByName(compoonentId, name)
  {
    const props = this.ui.getComponent(compoonentId)

    if(this.isComponent(props[name]))
      return [props[name].id]
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
      default     : return this.getNodeIdByName(component.id, emitTo)
      }
    }

    return [node.id]
  }

  getObservers(component)
  {
    const observers = this.configuration.find(`core.component.${component}.listeners`)
    return Array.isArray(observers) ? observers : []
  }

  execute(event)
  {
    const
    id    = event.data.id,
    path  = this.ui.getSubtreePath(id)

    for(const componentId of path)
    {
      const
      component                 = this.ui.getNode(componentId),
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
    }
  }
}

module.exports = AddComponentListenersObserver
