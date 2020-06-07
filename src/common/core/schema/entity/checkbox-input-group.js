const dto = {
  '@meta' :
  {
    extends : 'entity/input-group'
  },
  input :
  {
    type   : 'schema',
    schema : 'entity/checkbox-input'
  },
  value :
  {
    type    : 'boolean',
    default : false
  }
}

module.exports = dto
