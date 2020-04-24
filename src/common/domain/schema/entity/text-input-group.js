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
  input :
  {
    type   : 'schema',
    schema : 'entity/text-input'

  },
  error :
  {
    type    : 'schema',
    schema  : 'value-object/error',
    default : {}
  }
}

module.exports = dto
