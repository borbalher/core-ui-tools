const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  label :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : false
  },
  error :
  {
    type     : 'schema',
    schema   : 'error',
    optional : true
  }
}

module.exports = dto
