const isComponent = require('../../../core/is-component')

class UIComponent
{
  constructor(id, bus, store, hbs, deepfind, repository, channel, bindings, listeners, locator)
  {
    this[Symbol.for('id')] = id
    this.bus               = bus
    this.store             = store
    this.hbs               = hbs
    this.deepfind          = deepfind
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
    renderedComponentTemplate = this.hbs.compilePartial(context.template, context),
    wrapper                   = document.createElement('div')

    wrapper.innerHTML = renderedComponentTemplate.trim()

    document.getElementById(this[Symbol.for('id')]).replaceWith(wrapper.firstChild)
    this.emit('component.rendered', { id: this[Symbol.for('id')], context })
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
    const component = this.deepfind.find(emitTo, context)
    return isComponent(component) ? [component.id] : [emitTo]
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

      this.bus.on(listenToChannel, eventName, (event) =>
      {
        if(observer)
          observer.execute({ ...event, meta: { ...event.meta, emitter: emitToChannel } })
        else
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
    for(const { listenTo, event, map, emitTo, locator, mapper } of this.listeners)
    {
      const
      listenToChannels = listenTo ? this.getChannels(listenTo) : [this[Symbol.for('id')]],
      emitToChannels   = emitTo   ? this.getChannels(emitTo)   : [this[Symbol.for('id')]]

      this.addComponentListeners(listenToChannels, emitToChannels, event, map, locator, mapper)
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
        bus.emit(channel, map  ? map : domEvent, eventMapper ? eventMapper.map(event, this) : event.data)
    })
  }

  addDOMBindings(emitTo, selector, domEvent, map, preventDefault, mapper)
  {
    const nodes = document.querySelectorAll(selector)
    if(nodes)
      nodes.forEach(this.addDOMBinding.bind(this, emitTo, domEvent, map, preventDefault, mapper))
  }

  bind()
  {
    for(const { selector, domEvent, map, emitTo, preventDefault, mapper } of this.bindings)
    {
      const channels = emitTo ? this.getChannels(emitTo) : [this[Symbol.for('id')]]
      this.addDOMBindings(channels, `#${this[Symbol.for('id')]}${selector ? ` ${selector}` : ''}`, domEvent, map, preventDefault, mapper)
    }
    this.emit('component.binded', { id: this[Symbol.for('id')], bindings: this.bindings })
  }

  emit(name, data)
  {
    this.channel.emit(name, data)
  }

  getParentComponentData()
  {
    return this.repository.getParentComponentData(this[Symbol.for('id')])
  }

  getComponentData(name)
  {
    if(!name)
    {
      return this.repository.getComponentData(this[Symbol.for('id')])
    }
    else
    {
      const child =  this.getComponentContext()[name]

      if(child && child.id)
        return this.repository.getComponentData(child.id)
    }
  }

  setComponentData(componentData)
  {
    this.repository.setComponentData(componentData)
  }

  getComponentContext()
  {
    return this.repository.getComponentContext(this[Symbol.for('id')])
  }

  setComponentContext(context)
  {
    return this.repository.setComponentContext(context)
  }
}

module.exports = UIComponent
