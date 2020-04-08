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
    schema : 'text-input'

  },
  error :
  {
    type   : 'schema',
    schema : 'error'
  }
}

module.exports = dto
