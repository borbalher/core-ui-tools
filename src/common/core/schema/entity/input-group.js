const dto = {
  '@meta' :
  {
    extends : 'entity/input'
  },
  input :
  {
    type   : 'schema',
    schema : 'entity/input'
  },
  error :
  {
    type     : 'schema',
    schema   : 'entity/error',
    optional : true
  },
  label :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  },
  errorMessage :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  },
  errorCode :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  },
  big :
  {
    type    : 'boolean',
    default : false
  }
}

module.exports = dto
