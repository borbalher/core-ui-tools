const dto = {
  '@meta' :
  {
    extends : 'entity/input-group'
  },
  input :
  {
    type   : 'schema',
    schema : 'entity/text-input'
  },
  afterDate :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  locale :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  value :
  {
    type     : 'string',
    optional : true
  }
}

module.exports = dto
