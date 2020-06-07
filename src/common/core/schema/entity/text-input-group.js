const dto = {
  '@meta' :
  {
    extends : 'entity/input-group'
  },
  input :
  {
    type   : 'schema',
    schema : 'entity/text-input'
  },
  value :
  {
    type     : 'string',
    optional : true
  },
  autocomplete :
  {
    type    : 'boolean',
    default : false
  },
  maxLength :
  {
    type     : 'integer',
    optional : true
  },
  placeholder :
  {
    type     : 'string',
    optional : true
  },
  pattern :
  {
    type     : 'string',
    optional : true
  }
}

module.exports = dto
