/**
 * @implements {superhero/core/eventbus/observer}
 */
class AddComponentBindingsObserver
{
  constructor(bus, ui, configuration, locator)
  {
    this.bus           = bus
    this.ui            = ui
    this.configuration = configuration
    this.locator       = locator
  }

  addListeners(emitTo, selector, domEvent, map, preventDefault, mapper)
  {
    const nodes = this.getComponentNodes(selector)
    nodes.forEach(this.addListener.bind(this, emitTo, domEvent, map, preventDefault, mapper))
  }

  emit(channelId, name, data)
  {
    this.bus.emit(channelId, name, data)
  }

  addListener(channels, domEvent, map, preventDefault, mapper, domNode)
  {
    domNode.addEventListener(domEvent, (event) =>
    {
      if(preventDefault)
        event.preventDefault()

      const eventMapper = mapper ? this.locator.locate(mapper) : undefined

      for(const channel of channels)
      {
        this.bus.emit(channel, map  ? map : domEvent, eventMapper ? eventMapper.map(event) : event.data)
      }
    })
  }

  isComponent(element)
  {
    return typeof element === 'object' &&
           element.hasOwnProperty('id') &&
           element.hasOwnProperty('name')
  }

  getComponentIdByName(componentId, name)
  {
    const props = this.ui.getComponentJSON(componentId)

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

    return []
  }

  /**
   * Gets the HTMLNode inside the component DOM for the specified selector
   * @returns {HTMLElement} - DOM HTML node
   */
  getComponentNode(selector)
  {
    return document.querySelector(selector)
  }

  /**
   * Gets the HTMLNodes inside the component DOM  for the specified selector
   * @returns {Array<HTMLElement>} - Array of DOM HTML nodes
   */
  getComponentNodes(selector)
  {
    return document.querySelectorAll(selector)
  }

  getBindings(component)
  {
    const bindings = this.configuration.find(`core.component.${component}.bindings`)
    return Array.isArray(bindings) ? bindings : []
  }

  execute(event)
  {
    const
    componentId = event.data.id,
    path        = this.ui.getSubtreePath(componentId)

    for(const componentPathId of path)
    {
      const
      component                       = this.ui.getComponent(componentPathId),
      { id, schema, template, bind }  = component,
      schemaBindings                  = this.getBindings(schema),
      templateBindings                = schema !== template ? this.getBindings(template)  : [],
      bindings                        = [...schemaBindings, ...templateBindings]

      if(bindings && bind)
      {
        for(const { selector, domEvent, map, emitTo, preventDefault, mapper } of bindings)
        {
          const channels = emitTo ? this.getChannels(emitTo, component) : [id]
          this.addListeners(channels, `#${componentPathId}${selector ? ` ${selector}` : ''}`, domEvent, map, preventDefault, mapper)
        }
      }
    }
  }
}

module.exports = AddComponentBindingsObserver
