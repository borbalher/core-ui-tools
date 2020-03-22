class Entity
{
  constructor({
    id,
    dto,
    deepfreeze,
    deepcopy,
    bus,
    set,
    composer,
    schema
  })
  {
    if(new.target === Entity)
      throw new TypeError('Cannot construct Entity instances directly')

    this[Symbol.for('id')]      = id
    this[Symbol.for('schema')]  = schema

    this.set                    = set
    this.deepfreeze             = deepfreeze
    this.deepcopy               = deepcopy
    this.bus                    = bus
    this.composer               = composer
    this.state                  = this.createState(dto)

    this.bus.createChannel(this[Symbol.for('id')])
  }

  createState(dto)
  {
    const state = this.composer.compose(this[Symbol.for('schema')], dto)
    return this.deepfreeze.freeze(state)
  }

  destroy()
  {
    this.bus.deleteChannel(this[Symbol.for('id')])
  }

  publish({
    eventName,
    data
  })
  {
    this.bus.publish({
      channelId : this[Symbol.for('id')],
      emitter   : this[Symbol.for('id')],
      eventName,
      data
    })
  }

  changeStatePath(path, value)
  {
    const newState = this.getState()
    this.set(newState, path, value)
    this.state  = this.createState(newState)

    this.publish({
      eventName : `${this[Symbol.for('id')]}.entity.${path}.state-changed`,
      data      : newState
    })
  }

  changeState(newState)
  {
    this.state = this.createState(newState)

    this.bus.publish({
      eventName : `${this[Symbol.for('id')]}.entity.state-changed`,
      data      : newState
    })
  }

  getState()
  {
    return this.deepcopy.fast(this.state)
  }

  get [Symbol.toStringTag]()
  {
    return 'Entity'
  }
}

module.exports = Entity
