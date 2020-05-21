const isComponent = require('browser/core/is-component')

class Page
{
  constructor(id, bus, store, hbs, repository, channel, bindings, listeners, locator)
  {
    this[Symbol.for('id')] = id
    this.bus               = bus
    this.store             = store
    this.hbs               = hbs
    this.repository        = repository
    this.channel           = channel
    this.bindings          = bindings
    this.listeners         = listeners
    this.locator           = locator

    this.bind()
    this.listen()
  }

  render()
  {
    const
    context                   = this.getComponentContext(this[Symbol.for('id')]),
    renderedComponentTemplate = this.hbs.compilePartial(context.schema, context)

    document.write(renderedComponentTemplate)
  }

  mapEmitToArray(emitTo, context)
  {
    let channels = []
    for(const channelId in emitTo)
      channels = [...channels, this.getChannels(channelId, context)]

    return channels
  }

  mapEmitToString(emitTo, context)
  {
    return isComponent(context[emitTo]) ? [context[emitTo].id] : [emitTo]
  }

  getChannels(emitTo)
  {
    const context = this.getComponentContext(this[Symbol.for('id')])
    return Array.isArray(emitTo) ? this.mapEmitToArray(emitTo, context) : typeof emitTo === 'string' ? this.mapEmitToString(emitTo, context) : []
  }

  addComponentListener(listenToChannel, emitToChannels, eventName, map, locator, mapper)
  {
    for(const emitToChannel of emitToChannels)
    {
      const
      observer    = locator ? this.locator.locate(locator) : undefined,
      eventMapper = mapper  ? this.locator.locate(mapper) : undefined

      this.bus.on(listenToChannel, eventName, observer ? observer.execute.bind(observer) : (event) =>
      {
        this.bus.emit(emitToChannel, map  ? map : eventName, eventMapper ? eventMapper.map(event.data) : event.data)
      })
    }
  }

  addComponentListeners(listenToChannels, emitToChannels, event, map, locator, mapper)
  {
    for(const listenToChannel of listenToChannels)
      this.addComponentListener(listenToChannel, emitToChannels, event, map, locator, mapper)
  }

  listen()
  {
    for(const key of Object.keys(this.listeners))
    {
      const
      { publisher, event, map, locator, eventMapper }  = this.listeners[key],
      publisherChannel  = publisher ? publisher : this[Symbol.for('id')],
      subscriberChannel = this[Symbol.for('id')]

      this.addComponentListener(publisherChannel, subscriberChannel, event, map, locator, eventMapper)
    }

    this.emit('component.listened', { id: this[Symbol.for('id')], listeners: this.listeners })
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
        bus.emit(channel, map  ? map : domEvent, eventMapper ? eventMapper.map(event, this) : { event, node: this })
    })
  }

  addDOMBindings(emitTo, selector, domEvent, map, preventDefault, mapper)
  {
    const nodes = document.querySelectorAll(selector)
    nodes.forEach(this.addDOMBinding.bind(this, emitTo, domEvent, map, preventDefault, mapper))
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
    this.channel.emit(name, data)
  }

  getComponentData()
  {
    return this.repository.getComponentData(this[Symbol.for('id')])
  }

  setComponentData(component)
  {
    this.repository.setComponentData(this[Symbol.for('id')], component)
  }

  getComponentContext()
  {
    return this.repository.getComponentContext(this[Symbol.for('id')])
  }

  setComponentContext(context)
  {
    return this.repository.setComponentContext(this[Symbol.for('id')], context)
  }
}

module.exports = Page
