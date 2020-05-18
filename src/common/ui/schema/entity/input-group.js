const dto = {
  '@meta' :
  {
    extends : 'entity/input'
  },
  input :
  {
    type   : 'schema',
    schema : 'entity/component'
  },
  label :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  },
  error :
  {
    type     : 'schema',
    schema   : 'value-object/error',
    optional : true
  },
  big :
  {
    type    : 'boolean',
    default : false
  }
}

module.exports = dto
