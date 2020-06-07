const dto = {
  '@meta' :
  {
    extends : 'entity/input-group'
  },
  input :
  {
    type   : 'schema',
    schema : 'entity/textarea-input'
  },
  value :
  {
    type     : 'string',
    optional : true
  }
}

module.exports = dto
