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
  input :
  {
    type   : 'schema',
    schema : 'input'

  },
  error :
  {
    type     : 'schema',
    schema   : 'error',
    optional : true
  }
}

module.exports = dto
