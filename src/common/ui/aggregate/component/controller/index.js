class ComponentController
{
  constructor(id, schema, bindings, listeners, bus, store, hbs, channel, locator)
  {
    this.bus                   = bus
    this.store                 = store
    this.hbs                   = hbs
    this.store                 = store
    this.channel               = channel
    this.bindings              = bindings
    this.listeners             = listeners
    this.locator               = locator
    this[Symbol.for('id')]     = id
    this[Symbol.for('schema')] = schema

    this.bind()
    this.listen()
  }

  render()
  {
    const
    context                   = this.store.getEntityContext(this[Symbol.for('schema')], this[Symbol.for('id')]),
    renderedComponentTemplate = this.hbs.compilePartial(context.template, context),
    wrapper                   = document.createElement('div')

    wrapper.innerHTML = renderedComponentTemplate.trim()

    document.getElementById(this[Symbol.for('id')]).replaceWith(wrapper.firstChild)
    this.emit('component.rendered', { id: this[Symbol.for('id')], context })
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
        domEventObject.preventDefault()

      if(stopPropagation)
        domEventObject.stopPropagation()

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

module.exports = ComponentController
