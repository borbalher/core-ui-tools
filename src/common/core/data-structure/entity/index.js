class Entity
{
  constructor(entity, schema, deepfreeze, deepassign, channel, composer)
  {
    const { id }               = entity
    this[Symbol.for('id')]     = id
    this[Symbol.for('schema')] = schema

    this.deepassign            = deepassign
    this.deepfreeze            = deepfreeze
    this.composer              = composer
    this.channel               = channel
    this.state                 = this.createState(entity)
  }

  createState(state)
  {
    const newState = this.composer.compose(this[Symbol.for('schema')], state)
    return this.deepfreeze.freeze(newState)
  }

  changeStatePath(path, value)
  {
    const stateModified = this.deepassign.assign(this.state, path, value)

    this.state          = this.changeState(stateModified)

    this.channel.emit(`${this[Symbol.for('id')]}.${path}.state-changed`, { state: this.state })
  }

  changeState(newState)
  {
    this.state = this.createState(newState)

    this.channel.emit(`${this[Symbol.for('id')]}.state-changed`, { state: this.state })
  }

  get [Symbol.toStringTag]()
  {
    return 'Entity'
  }
}

module.exports = Entity
