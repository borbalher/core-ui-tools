const dto = {
  '@meta' :
  {
    extends : 'entity/component'
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
    schema   : 'error',
    optional : true
  },
  big :
  {
    type    : 'boolean',
    default : false
  }
}

module.exports = dto
