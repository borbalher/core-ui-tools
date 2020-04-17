/**
 * @implements {superhero/core/eventbus/observer}
 */
class AddDOMNodeObserversObserver
{
  constructor(bus, dom, configuration, locator)
  {
    this.bus           = bus
    this.dom           = dom
    this.configuration = configuration
    this.locator       = locator
  }

  addDOMNodeObservers(listenToChannels, emitToChannels, event, map, locator, mapper)
  {
    for(const listenToChannel of listenToChannels)
      this.addDOMNodeObserver(listenToChannel, emitToChannels, event, map, locator, mapper)
  }

  addDOMNodeObserver(listenToChannel, emitToChannels, eventName, map, locator, mapper)
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

  getChildren(nodeId)
  {
    return this.dom.getChildren(nodeId)
  }

  isNode(element)
  {
    return typeof element === 'object' &&
           element.hasOwnProperty('id') && element.id &&
           element.hasOwnProperty('name') && element.name
  }

  getNodeIdByName(nodeId, name)
  {
    const props = this.dom.getNodeProps(nodeId)

    if(this.isNode(props[name]))
      return [props[name].id]
  }

  getChannels(emitTo, node)
  {
    if(Array.isArray(emitTo))
    {
      let channels = []
      for(const channelId in emitTo)
        channels = [...channels, this.getChannels(channelId, node)]

      return channels
    }
    else if(typeof emitTo === 'string')
    {
      switch(emitTo)
      {
      case 'self'      : return [node.id]
      case 'children'  : return this.getChildren(node.id)
      default          : return this.getNodeIdByName(node.id, emitTo)
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
    path  = this.dom.getSubtreePath(id)

    for(const nodeId of path)
    {
      const
      node              = this.dom.getNode(nodeId),
      schemaObservers   = this.getObservers(node.schema),
      templateObservers = node.schema !== node.template ? this.getObservers(node.template)  : [],
      observers         = [...schemaObservers, ...templateObservers]

      if(observers)
      {
        for(const { listenTo, event, map, emitTo, locator, mapper } of observers)
        {
          const
          listenToChannels = listenTo ? this.getChannels(listenTo, node) : [node.id],
          emitToChannels   = emitTo   ? this.getChannels(emitTo, node) : [node.id]

          this.addDOMNodeObservers(listenToChannels, emitToChannels, event, map, locator, mapper)
        }
      }
    }
  }
}

module.exports = AddDOMNodeObserversObserver
