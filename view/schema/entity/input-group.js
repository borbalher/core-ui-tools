const dto = {
  '@meta' :
  {
    extends : 'ui'
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
    type   : 'schema',
    schema : 'error'
  }
}

module.exports = dto
