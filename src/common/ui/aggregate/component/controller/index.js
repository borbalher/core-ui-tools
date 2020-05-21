class ComponentController
{
  constructor(id, schema, bindings = {}, listeners = {}, options = {}, bus, store, hbs, channel, locator, page)
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
    this.options               = options
    this[Symbol.for('id')]     = id
    this[Symbol.for('schema')] = schema

    this.bind()
    this.listen()
  }

  getContext()
  {
    return this.page.getContext(this[Symbol.for('id')])
  }

  dispatch(name, data, meta = {})
  {
    const action = this.store.composeAction(name, data, { ...meta, emitter: this[Symbol.for('id')], schema: this[Symbol.for('schema')] })
    this.store.dispatch(action)
    this.emit('action.dispatched', { action })
  }

  getChildrenController(name)
  {
    const childrenId = this.getChildrenId(name)

    if(childrenId) // TODO WE NEED TO ENSURE THAT THIS IS CORRECT
      return this.page.controllers.getController(childrenId)
  }

  getChildrenContext(name)
  {
    const context = this.page.getContext(this[Symbol.for('id')])
    if(context[name] && context[name].id) // TODO WE NEED TO ENSURE THAT THIS IS CORRECT
      return this.page.getContext(context[name].id)
  }

  getChildrenId(name)
  {
    const context = this.page.getContext(this[Symbol.for('id')])
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
    this.emit('component.rendered', { id: this[Symbol.for('id')], context })
  }

  addComponentListener(publisherChannel, eventName, map, locator, eventMapper, dispatch)
  {
    const
    subscriberId      = this[Symbol.for('id')],
    subscriberSchema  = this[Symbol.for('schema')],
    store             = this.store,
    observer          = locator      ? this.locator.locate(locator)                : undefined,
    name              = map          ? map                                         : eventName

    this.bus.on(publisherChannel, eventName, (event) =>
    {
      const  data = eventMapper  ? locator.locate(eventMapper).map(event.data) : event.data

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

  getChildrenChannel(channel)
  {
    const context = this.page.getContext(this[Symbol.for('id')])

    if(context[channel] && context[channel].id) // TODO WE NEED TO ENSURE THAT THIS IS CORRECT
      return context[channel].id
  }

  listen()
  {
    for(const key of Object.keys(this.listeners))
    {
      const
      { channel, event, map, locator, eventMapper, dispatch }  = this.listeners[key]

      let publisherChannel
      if(!channel)
        publisherChannel = this[Symbol.for('id')]
      else if(channel && this.getChildrenChannel(channel))
        publisherChannel  = this.getChildrenChannel(channel)
      else
        publisherChannel = channel

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
      data        = domEventMapper  ? eventMapper.map(domEventObject, this) : { event, node: this }

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

    this.emit('component.binded', { id: this[Symbol.for('id')], bindings: this.bindings })
  }

  emit(name, data)
  {
    this.channel.emit(name, data, { schema: this[Symbol.for('id')] })
  }
}

module.exports = ComponentController
