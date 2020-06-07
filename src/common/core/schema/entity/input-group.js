const dto = {
  '@meta' :
  {
    extends : 'entity/input'
  },
  optional :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  },
  label :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  },
  error :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  },
  big :
  {
    type    : 'boolean',
    default : false
  }
}

module.exports = dto
