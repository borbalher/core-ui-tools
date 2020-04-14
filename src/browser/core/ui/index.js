class UI
{
  constructor(initialViewModel, treeFactory, hbs, channel, treeUtils, object, locator, bus, configuration)
  {
    this.treeFactory   = treeFactory
    this.hbs           = hbs
    this.channel       = channel
    this.treeUtils     = treeUtils
    this.object        = object
    this.locator       = locator
    this.bus           = bus
    this.configuration = configuration
    this.tree          = this.createTreeFromContext(initialViewModel)

    this[Symbol.for('id')] = `${new URL(window.location.href).pathname.slice(1)}-page`
  }

  update(viewModel)
  {
    const
    { nodes, edges, root }  = this.treeUtils.jsonToTree(viewModel),
    newTree                 = this.treeFactory.create(nodes, edges, root),
    previousTree            = this.tree

    this.tree               = newTree

    const
    path    = newTree.bfs(newTree.root),
    exclude = []

    path.shift()

    for(const nodeId of path)
    {
      const
      previousNode        = previousTree.nodes.getItem(nodeId),
      previousNodeContext = previousTree.getJSON(nodeId, false)[previousNode.name],
      newNode             = newTree.nodes.getItem(nodeId),
      newNodeContext      = newTree.getJSON(nodeId, false)[newNode.name]

      if(!this.object.isEqual(previousNodeContext, newNodeContext) && exclude.indexOf(nodeId) === -1)
      {
        const edges = this.tree.edges.getItem(nodeId) || []
        for(const edge of edges)
          exclude.push(edge.target)

        this.setComponent(nodeId, newNodeContext)
        this.renderComponent(nodeId)
        this.bindComponent(nodeId)
      }
    }
  }

  getSubtreePath(componentId)
  {
    return this.tree.bfs(componentId)
  }

  getComponentContext(componentId)
  {
    const
    component = this.getComponent(componentId),
    json      = this.tree.getJSON(componentId, false)

    return json[component.name]
  }

  renderComponent(componentId)
  {
    const
    component                 = this.getComponentContext(componentId),
    renderedComponentTemplate = this.hbs.compilePartial(component.template, component),
    wrapper                   = document.createElement('div')

    wrapper.innerHTML = renderedComponentTemplate.trim()

    document.getElementById(componentId).replaceWith(wrapper.firstChild)
    this.channel.emit('component.rendered', { id: componentId })
  }

  createTreeFromContext(context)
  {
    const { nodes, edges, root } = this.treeUtils.jsonToTree(context)
    return this.treeFactory.create(nodes, edges, root)
  }

  setComponent(componentId, context)
  {
    const { nodes, edges } = this.treeUtils.jsonToTree(context)

    for(const node of nodes)
      this.tree.addNode(node)

    for(const edge of edges)
      this.tree.addEdge(edge)

    this.channel.emit('component.setted', { id: componentId })
  }

  isComponent(element)
  {
    return typeof element === 'object' &&
           element.hasOwnProperty('id') &&
           element.hasOwnProperty('name') &&
           element.hasOwnProperty('template') &&
           element.hasOwnProperty('schema')
  }

  getComponentIdByName(componentId, name)
  {
    const context = this.getComponentContext(componentId)

    if(this.isComponent(context[name]))
      return context[name].id

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

  getBindingsFor(name)
  {
    const bindings = this.configuration.find(`core.ui.${name}.bindings`)
    return Array.isArray(bindings) ? bindings : []
  }

  getBindings({ template, schema })
  {
    const
    schemaBindings   = this.getBindingsFor(schema),
    templateBindings = schema !== template ? this.getBindingsFor(template)  : [],
    bindings         = [...schemaBindings, ...templateBindings]

    return bindings
  }

  getObserversFor(name)
  {
    const observers = this.configuration.find(`core.ui.${name}.listeners`)
    return Array.isArray(observers) ? observers : []
  }

  getObservers({ template, schema })
  {
    const
    schemaObservers   = this.getObserversFor(schema),
    templateObservers = schema !== template ? this.getObserversFor(template)  : [],
    observers         = [...schemaObservers, ...templateObservers]

    return observers
  }

  bindComponent(componentId)
  {
    const path = this.tree.bfs(componentId)
    for(const pathId of path)
    {
      const
      component = this.getComponent(pathId),
      bindings  = this.getBindings(component)

      if(bindings.length)
      {
        for(const { selector, domEvent, map, emitTo, preventDefault, mapper } of bindings)
        {
          const channels = emitTo ? this.getChannels(emitTo, component) : [component.id]
          this.addDOMBindings(channels, `#${pathId}${selector ? ` ${selector}` : ''}`, domEvent, map, preventDefault, mapper)
        }
      }
    }
    this.channel.emit('component.binded', { id: componentId })
  }

  addDOMBindings(emitTo, selector, domEvent, map, preventDefault, mapper)
  {
    const nodes = document.querySelectorAll(selector)
    nodes.forEach(this.addDOMBinding.bind(this, emitTo, domEvent, map, preventDefault, mapper))
  }

  addDOMBinding(channels, domEvent, map, preventDefault, mapper, domNode)
  {
    const
    locator = this.locator,
    bus     = this.bus

    domNode.addEventListener(domEvent, function(event)
    {
      if(preventDefault)
        event.preventDefault()

      const eventMapper = mapper ? locator.locate(mapper) : undefined

      for(const channel of channels)
        bus.emit(channel, map  ? map : domEvent, eventMapper ? eventMapper.map(event, this) : event.data)
    })
  }

  listenComponent(id)
  {
    const path  = this.getSubtreePath(id)
    for(const nodeId of path)
    {
      if(!this.bus.getChannel(nodeId))
        this.bus.createChannel(nodeId)
      else
        this.bus.clear(nodeId)
    }

    for(const nodeId of path)
    {
      const
      component  = this.getComponent(nodeId),
      observers  = this.getObservers(component)

      if(observers.length)
      {
        for(const { listenTo, event, map, emitTo, locator, mapper } of observers)
        {
          const
          listenToChannels = listenTo ? this.getChannels(listenTo, component) : [nodeId],
          emitToChannels   = emitTo   ? this.getChannels(emitTo, component)   : [nodeId]

          this.addComponentObservers(listenToChannels, emitToChannels, event, map, locator, mapper)
        }
      }
    }
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

  getComponent(componentId)
  {
    return this.tree.nodes.getItem(componentId)
  }
}

module.exports = UI
