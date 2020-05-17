class Page
{
  constructor({
    listeners = [],
    bindings  = [],
    controllerRepository,
    initialViewModel,
    componentFactory,
    treeFactory,
    jsonToTree,
    composer,
    channel,
    object,
    schema,
    id
  })
  {
    this.initialViewModel       = initialViewModel
    this.componentFactory       = componentFactory
    this.treeFactory            = treeFactory
    this.controllers            = controllerRepository
    this.jsonToTree             = jsonToTree
    this.composer               = composer
    this.listeners              = listeners
    this.bindings               = bindings
    this.channel                = channel
    this.object                 = object

    this.tree                   = this.createTreeFromContext(initialViewModel)

    this[Symbol.for('schema')]  = schema
    this[Symbol.for('id')]      = id
  }

  createTreeFromContext(context)
  {
    const { nodes, edges, root } = this.jsonToTree.convert(context)
    return this.treeFactory.create(nodes, edges, root)
  }

  update(previous, current)
  {
    this.bootstrap()

    const
    previousTree = this.createTreeFromContext(previous),
    currentTree  = this.createTreeFromContext(current),
    path         = currentTree.bfs(currentTree.root).shift()

    let exclude = []
    for(const componentId of path)
    {
      const
      previous = previousTree.nodes.getItem(componentId),
      current  = currentTree.tree.nodes.getItem(componentId)

      if(!this.object.isEqual(previous, current) && exclude.indexOf(componentId) === -1)
        exclude = [...exclude,  this.onComponentChange(componentId, previous, current)]
    }
  }

  onComponentChange(componentId, previous, current)
  {
    const data = this.getData(componentId)

    let subtreePath = []

    const component = this.getController(componentId)

    component.emit('component.changed', { previous, current })

    if(data.renderOnChange)
    {
      component.render()

      subtreePath = this.tree.bfs(componentId)
      for(const componentId of subtreePath)
      {
        const subtreeComponent = this.getController(componentId)
        subtreeComponent.bind()
      }
    }

    return subtreePath
  }

  bootstrap()
  {
    const
    root = this.tree.root,
    path = this.tree.bfs(root)

    if(path)
    {
      path.shift()

      for(const componentId of path.reverse())
      {
        const
        componentData = this.getData(componentId),
        component     = this.componentFactory.create(componentData)(this)

        this.components.setItem(componentId, component)
      }
    }

    this.bind()
    this.listen()
  }

  getController(componentId)
  {
    return this.components.getItem(componentId)
  }

  setData(component)
  {
    this.tree.addNode(component)
  }

  getData(componentId)
  {
    return this.tree.nodes.getItem(componentId)
  }

  setContext(context)
  {
    const { nodes, edges } = this.viewModelToTree.map(context)

    for(const node of nodes)
      this.tree.addNode(node)

    for(const edge of edges)
      this.tree.addEdge(edge)

    this.onComponentChange(context.id)
  }

  getContext(componentId)
  {
    const
    { name } = this.getData(componentId),
    json     = this.tree.getJSON(componentId, false)

    return json[name]
  }

  addComponentListener(publisherChannel, subscriberChannel, eventName, map, locator, eventMapper)
  {
    const
    observer = locator      ? this.locator.locate(locator) : undefined,
    mapper   = eventMapper  ? this.locator.locate(eventMapper) : undefined

    this.bus.on(publisherChannel, eventName, (event) =>
    {
      if(observer)
        observer.execute({ ...event, meta: { ...event.meta, emitter: subscriberChannel } })
      else
        this.bus.emit(subscriberChannel, map  ? map : eventName, mapper ? mapper.map(event.data) : event.data)
    })
  }

  listen()
  {
    for(const { publisher, event, map, locator, eventMapper } of this.listeners)
    {
      const
      publisherChannel  = publisher ? publisher : [this[Symbol.for('id')]],
      subscriberChannel = this[Symbol.for('id')]

      this.addComponentListener(publisherChannel, subscriberChannel, event, map, locator, eventMapper)
    }

    this.emit('component.listened', { id: this[Symbol.for('id')], listeners: this.listeners })
  }

  addDOMBinding(domEvent, event, preventDefault, stopPropagation, domEventMapper, domNode)
  {
    const
    locator = this.locator,
    bus     = this.bus

    domNode.addEventListener(domEvent, function(domEventObject)
    {
      if(preventDefault)
        event.preventDefault()

      if(stopPropagation)
        event.stopPropagation()

      const
      name        = event           ? event                                 : domEvent,
      eventMapper = domEventMapper  ? locator.locate(domEventMapper)        : undefined,
      data        = domEventMapper  ? eventMapper.map(domEventObject, this) : { event }

      bus.emit(this[Symbol.for('id')], name, data)
    })
  }

  addDOMBindings(selector, domEvent, event, preventDefault, stopPropagation, domEventMapper)
  {
    const nodes = document.querySelectorAll(selector)
    if(nodes)
      nodes.forEach(this.addDOMBinding.bind(this, domEvent, event, preventDefault, stopPropagation, domEventMapper))
  }

  bind()
  {
    for(const { selector, domEvent, event, preventDefault, stopPropagation, domEventMapper } of this.bindings)
      this.addDOMBindings(`#${this[Symbol.for('id')]}${selector ? ` ${selector}` : ''}`, domEvent, event, preventDefault, stopPropagation, domEventMapper)

    this.emit('component.binded', { id: this[Symbol.for('id')], bindings: this.bindings })
  }

  emit(name, data)
  {
    this.channel.emit(name, data)
  }
}

module.exports = Page
