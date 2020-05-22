const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  input :
  {
    type   : 'schema',
    schema : 'entity/input'
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
    schema   : 'entity/error',
    optional : true
  },
  big :
  {
    type    : 'boolean',
    default : false
  }
}

module.exports = dto
