const dto = {
  '@meta' :
  {
    extends : 'component'
  },
  key :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : false
  },
  label :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : false
  },
  value :
  {
    type     : 'string',
    optional : true
  },
  data :
  {
    type     : 'json',
    optional : true
  },
  required :
  {
    type    : 'boolean',
    default : true
  },
  disabled :
  {
    type    : 'boolean',
    default : false
  },
  readOnly :
  {
    type    : 'boolean',
    default : false
  },
  error :
  {
    type   : 'schema',
    schema : 'error'
  }
}

module.exports = dto
