/**
 * @implements {superhero/core/eventbus/observer}
 */
class BindDOMNodeObserver
{
  constructor(bus, dom, configuration, locator)
  {
    this.bus           = bus
    this.dom           = dom
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

  getAdjacentNodes(nodeId)
  {
    const adjacentNodes = this.dom.getDOM().getAdjacentNodes(nodeId)

    return adjacentNodes
  }

  getNodeFromKey(nodeId, key)
  {
    const props = this.dom.getNodeProps(nodeId)

    if(props[key] && props[key].id)
    {
      const  childNode = this.dom.getNode(props[key].id)
      return childNode ? [childNode.id] : []
    }

    return []
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
      case 'children'  : return this.getAdjacentNodes(node.id)
      default          : return this.getNodeFromKey(node.id, emitTo)
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
    nodeId  = event.data.id,
    path    = this.dom.getSubtreePath(nodeId)

    for(const nodeId of path)
    {
      const
      node             = this.dom.getNode(nodeId),
      schemaBindings   = this.getBindings(node.schema),
      templateBindings = node.schema !== node.template ? this.getBindings(node.template)  : [],
      bindings         = [...schemaBindings, ...templateBindings]

      if(bindings && node.bind)
      {
        for(const { selector, domEvent, map, emitTo, preventDefault, mapper } of bindings)
        {
          const channels = emitTo ? this.getChannels(emitTo, node) : [node.id]
          this.addListeners(channels, `#${nodeId} ${selector}`, domEvent, map, preventDefault, mapper)
        }
      }
    }
  }
}

module.exports = BindDOMNodeObserver
