const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  attribute :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  title :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
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
