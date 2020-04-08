const dto = {
  '@meta' :
  {
    extends : 'ui'
  },
  attribute :
  {
    type        : 'string',
    'not-empty' : false
  },
  value :
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
  }
}

module.exports = dto
