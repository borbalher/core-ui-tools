const dto = {
  '@meta' :
  {
    extends : 'entity/input-group'
  },
  input :
  {
    type   : 'schema',
    schema : 'entity/select-input'
  },
  value :
  {
    type       : 'string',
    optional   : true,
    collection : true,
    default    : []
  }
}

module.exports = dto
