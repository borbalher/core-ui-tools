const
isComponent = require('browser/core/is-component'),
Entity      = require('common/core/data-structure/entity')

class ComponentController extends Entity
{
  constructor(component, bus, store, hbs, deepfind, repository, channel,  deepfreeze, deepassign, composer, locator)
  {
    super(component, component.schema, deepfreeze, deepassign, channel, composer)

    this.bus               = bus
    this.store             = store
    this.hbs               = hbs
    this.deepfind          = deepfind
    this.repository        = repository
    this.channel           = channel
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
    for(const { channel, event, map, locator, mapper } of this.listeners)
    {
      const
      listenToChannels = channel ? this.getChannels(channel) : [this[Symbol.for('id')]],
      emitToChannels   = [this[Symbol.for('id')]]

      this.addComponentListeners(listenToChannels, emitToChannels, event, map, locator, mapper)
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

module.exports = ComponentController
