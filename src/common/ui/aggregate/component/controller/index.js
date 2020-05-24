class ComponentController
{
  constructor(component, bus, store, hbs, channel, locator, virtualDOM, actionComposer, eventComposer)
  {
    this.bus                   = bus
    this.store                 = store
    this.hbs                   = hbs
    this.actionComposer        = actionComposer
    this.eventComposer         = eventComposer
    this.channel               = channel
    this.locator               = locator
    this.virtualDOM            = virtualDOM

    const { bindings, listeners, options, schema, id } = component

    this.bindings              = bindings
    this.listeners             = listeners
    this.options               = options
    this[Symbol.for('id')]     = id
    this[Symbol.for('schema')] = schema

    this.bind()
    this.listen()
  }

  getContext()
  {
    return this.virtualDOM.getContext(this[Symbol.for('id')])
  }

  composeAction(name, data, meta = {})
  {
    return this.actionComposer.compose(name, data, { ...meta, emitter: this[Symbol.for('id')], schema: this[Symbol.for('schema')] })
  }

  composeEvent(name, data, meta = {})
  {
    return this.eventComposer.compose(name, data, { ...meta, emitter: this[Symbol.for('id')], schema: this[Symbol.for('schema')] })
  }

  dispatch(name, data, meta = {})
  {
    const action = this.composeAction(name, data, meta)
    this.store.dispatch(action)
    this.emit('action.dispatched', { action })
  }

  getChildrenController(name)
  {
    const childrenId = this.getChildrenId(name)

    if(childrenId) // TODO WE NEED TO ENSURE THAT THIS IS CORRECT
      return this.virtualDOM.controllers.getController(childrenId)
  }

  getChildrenContext(name)
  {
    const context = this.virtualDOM.getContext(this[Symbol.for('id')])
    if(context[name] && context[name].id) // TODO WE NEED TO ENSURE THAT THIS IS CORRECT
      return this.virtualDOM.getContext(context[name].id)
  }

  getChildrenId(name)
  {
    const context = this.virtualDOM.getContext(this[Symbol.for('id')])
    if(context[name] && context[name].id) // TODO WE NEED TO ENSURE THAT THIS IS CORRECT
      return context[name].id
  }

  render()
  {
    const
    context                   = this.getContext(),
    renderedComponentTemplate = this.hbs.compilePartial(context.template, context),
    wrapper                   = document.createElement('div')

    wrapper.innerHTML = renderedComponentTemplate.trim()

    document.getElementById(this[Symbol.for('id')]).replaceWith(wrapper.firstChild)

    this.emit('component.rendered', { context })
  }

  addComponentListener(publisherChannel, eventName, map, locator, eventMapper, dispatch)
  {
    const
    // store             = this.store,
    observer          = locator      ? this.locator.locate(locator)                : undefined,
    name              = map          ? map                                         : eventName
    // composeAction     = this.composeAction,
    // composeEvent      = this.composeEvent

    this.bus.on(publisherChannel, eventName, (event) =>
    {
      const data = eventMapper  ? locator.locate(eventMapper).map(event.data) : event.data

      if(dispatch)
      {
        const action = this.composeAction(name, data)
        this.store.dispatch(action)
      }
      else if(observer)
      {
        const event = this.composeEvent(name, data)
        observer.execute(event)
      }
      else
      {
        this.emit(name, data)
      }
    })
  }

  getChildrenChannel(channel)
  {
    const context = this.virtualDOM.getContext(this[Symbol.for('id')])

    if(context[channel] && context[channel].id) // TODO WE NEED TO ENSURE THAT THIS IS CORRECT
      return context[channel].id
  }

  listen()
  {
    for(const listener of this.listeners)
    {
      const
      { channel, event, map, locator, eventMapper, dispatch }  = listener

      let publisherChannel
      if(!channel)
        publisherChannel = this[Symbol.for('id')]
      else if(channel && this.getChildrenChannel(channel))
        publisherChannel  = this.getChildrenChannel(channel)
      else
        publisherChannel = channel

      this.addComponentListener(publisherChannel, event, map, locator, eventMapper, dispatch)
    }

    this.emit('listeners.added', { listeners: this.listeners })
  }

  addDOMBinding(domEvent, event, preventDefault, stopPropagation, domEventMapper, dispatch, domNode)
  {
    const
    locator           = this.locator,
    bus               = this.bus,
    subscriberId      = this[Symbol.for('id')],
    subscriberSchema  = this[Symbol.for('schema')],
    store             = this.store,
    actionComposer    = this.actionComposer,
    eventComposer     = this.eventComposer

    domNode.addEventListener(domEvent, function(domEventObject)
    {
      if(preventDefault)
        domEventObject.preventDefault()

      if(stopPropagation)
        domEventObject.stopPropagation()

      const
      name        = event           ? event                                 : domEvent,
      eventMapper = domEventMapper  ? locator.locate(domEventMapper)        : undefined,
      data        = domEventMapper  ? eventMapper.map(domEventObject, this) : { event, node: this }

      if(dispatch)
      {
        const action = actionComposer.compose(name, data, { emitter: subscriberId, schema: subscriberSchema })
        store.dispatch(action)
      }
      else
      {
        const event = eventComposer.compose(name, data)
        bus.emit(subscriberId, event)
      }
    })
  }

  addDOMBindings({ selector, domEvent, event, dispatch, preventDefault, stopPropagation, domEventMapper })
  {
    const nodes = document.querySelectorAll(`#${this[Symbol.for('id')]}${selector ? ` ${selector}` : ''}`)
    if(nodes)
      nodes.forEach(this.addDOMBinding.bind(this, domEvent, event, preventDefault, stopPropagation, domEventMapper, dispatch))
  }

  bind()
  {
    for(const key of Object.keys(this.bindings))
      this.addDOMBindings(this.bindings[key])

    this.emit('bindings.added', { bindings: this.bindings })
  }

  emit(name, data)
  {
    const event = this.composeEvent(name, data)
    this.channel.emit(event)
  }
}

module.exports = ComponentController
