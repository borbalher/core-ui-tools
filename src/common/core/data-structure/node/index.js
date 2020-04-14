class Entity
{
  constructor({
    id,
    schema,
    dto,
    deepfreeze,
    deepcopy,
    deepassign, // TODO
    channel,
    composer
  })
  {
    this[Symbol.for('id')]     = id
    this[Symbol.for('schema')] = schema

    this.deepassign            = deepassign
    this.deepfreeze            = deepfreeze
    this.deepcopy              = deepcopy
    this.composer              = composer
    this.channel               = channel
    this.state                 = this.createState(dto)
  }

  createState(dto)
  {
    const state = this.composer.compose(this[Symbol.for('schema')], dto)
    return this.deepfreeze.freeze(state)
  }

  changeStatePath(path, value)
  {
    const stateModified = this.deepassign.assign(this.state, path, value)

    this.state          = this.changeState(stateModified)

    this.channel.emit({
      name : `${this[Symbol.for('id')]}.${path}.state-changed`,
      data : stateModified
    })
  }

  changeState(newState)
  {
    this.state = this.createState(newState)

    this.channel.emit({
      name : `${this[Symbol.for('id')]}.state-changed`,
      data : newState
    })
  }

  get [Symbol.toStringTag]()
  {
    return 'Entity'
  }
}

module.exports = Entity
