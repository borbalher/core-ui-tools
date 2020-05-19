class ComponentController
{
  constructor(id, schema, bindings, listeners, bus, store, hbs, channel, locator, page)
  {
    this.bus                   = bus
    this.store                 = store
    this.hbs                   = hbs
    this.store                 = store
    this.channel               = channel
    this.bindings              = bindings
    this.listeners             = listeners
    this.locator               = locator
    this.page                  = page
    this[Symbol.for('id')]     = id
    this[Symbol.for('schema')] = schema

    this.bind()
    this.listen()
  }

  render()
  {
    const
    context                   = this.page.getContext(this[Symbol.for('id')]),
    renderedComponentTemplate = this.hbs.compilePartial(context.template, context),
    wrapper                   = document.createElement('div')

    wrapper.innerHTML = renderedComponentTemplate.trim()

    document.getElementById(this[Symbol.for('id')]).replaceWith(wrapper.firstChild)
    this.emit('component.rendered', { id: this[Symbol.for('id')], context })
  }

  addComponentListener(publisherChannel, eventName, map, locator, eventMapper, dispatch)
  {
    const
    subscriberId      = this[Symbol.for('id')],
    subscriberSchema  = this[Symbol.for('schema')],
    store             = this.store,
    observer          = locator      ? this.locator.locate(locator)                : undefined,
    name              = map          ? map                                         : eventName,
    data              = eventMapper  ? locator.locate(eventMapper).map(event.data) : event.data

    this.bus.on(publisherChannel, eventName, (event) =>
    {
      if(dispatch)
      {
        const action = store.composeAction(name, data, { emitter: subscriberId, schema: subscriberSchema })
        store.dispatch(action)
      }
      else if(observer)
      {
        observer.execute({ data, meta: { ...event.meta, emitter: subscriberId } })
      }
      else
      {
        this.bus.emit(subscriberId, name, data)
      }
    })
  }

  getPublisherChannel(channel)
  {
    const context = this.page.getContext(this[Symbol.for('id')])

    if(context[channel].id) // TODO WE NEED TO ENSURE THAT THIS IS CORRECT
      return context[channel].id

    return channel
  }

  listen()
  {
    for(const key of Object.keys(this.listeners))
    {
      const
      { channel, event, map, locator, eventMapper, dispatch }  = this.listeners[key],
      publisherChannel  = channel ? this.getPublisherChannel(channel) : this[Symbol.for('id')]

      this.addComponentListener(publisherChannel, event, map, locator, eventMapper, dispatch)
    }

    this.emit('component.listened', { id: this[Symbol.for('id')], listeners: this.listeners })
  }

  addDOMBinding(domEvent, event, preventDefault, stopPropagation, domEventMapper, dispatch, domNode)
  {
    const
    locator           = this.locator,
    bus               = this.bus,
    subscriberId      = this[Symbol.for('id')],
    subscriberSchema  = this[Symbol.for('schema')],
    store             = this.store

    domNode.addEventListener(domEvent, function(domEventObject)
    {
      if(preventDefault)
        domEventObject.preventDefault()

      if(stopPropagation)
        domEventObject.stopPropagation()

      const
      name        = event           ? event                                 : domEvent,
      eventMapper = domEventMapper  ? locator.locate(domEventMapper)        : undefined,
      data        = domEventMapper  ? eventMapper.map(domEventObject, this) : { event }

      if(dispatch)
      {
        const action = store.composeAction(name, data, { emitter: subscriberId, schema: subscriberSchema })
        store.dispatch(action)
      }
      else
      {
        bus.emit(subscriberId, name, data)
      }
    })
  }

  addDOMBindings(selector, domEvent, event, preventDefault, stopPropagation, domEventMapper, dispatch)
  {
    const nodes = document.querySelectorAll(selector)
    if(nodes)
      nodes.forEach(this.addDOMBinding.bind(this, domEvent, event, preventDefault, stopPropagation, domEventMapper, dispatch))
  }

  bind()
  {
    for(const key of Object.keys(this.bindings))
    {
      const { selector, domEvent, event, dispatch, preventDefault, stopPropagation, domEventMapper } = this.bindings[key]
      this.addDOMBindings(`#${this[Symbol.for('id')]}${selector ? ` ${selector}` : ''}`, domEvent, event, preventDefault, stopPropagation, domEventMapper, dispatch)
    }

    this.emit('component.binded', { id: this[Symbol.for('id')], bindings: this.bindings })
  }

  emit(name, data)
  {
    this.channel.emit(name, data, { schema: this[Symbol.for('id')] })
  }
}

module.exports = ComponentController
