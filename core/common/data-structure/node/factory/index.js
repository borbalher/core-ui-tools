const Entity = require('..')

class EntityFactory
{
  constructor({
    idGenerator,
    bus,
    deepfreeze,
    deepcopy,
    deepassign,
    composer,
    schema
  })
  {
    this.idGenerator = idGenerator
    this.bus         = bus
    this.deepassign  = deepassign
    this.deepfreeze  = deepfreeze
    this.deepcopy    = deepcopy
    this.composer    = composer
    this.schema      = schema
  }

  getId({ id })
  {
    return id ? id : this.idGenerator.getId()
  }

  composeDTO(dto)
  {
    return this.composer.compose(this.schema, dto)
  }

  createChannel(id)
  {
    this.bus.addChannel(id)

    return this.bus.getChannel(id)
  }

  /**
   * @returns {Entity}
   */
  create(dto)
  {
    return new Entity({
      id         : this.getId(dto),
      dto        : this.composeDTO(dto),
      channel    : this.createChannel(dto.id),
      deepassign : this.deepassign,
      deepfreeze : this.deepfreeze,
      deepcopy   : this.deepcopy,
      composer   : this.composer,
      schema     : this.schema
    })
  }
}

module.exports = EntityFactory
