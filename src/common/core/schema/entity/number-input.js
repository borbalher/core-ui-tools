const dto = {
  '@meta' :
  {
    extends : 'entity/input'
  },
  value :
  {
    type     : 'string',
    optional : true
  },
  max :
  {
    type     : 'string',
    optional : true
  },
  min :
  {
    type     : 'string',
    optional : true
  },
  step :
  {
    type     : 'string',
    optional : true
  },
  placeholder :
  {
    type     : 'string',
    optional : true
  },
  acceptNegatives :
  {
    type    : 'boolean',
    default : true
  },
  acceptDecimals :
  {
    type    : 'boolean',
    default : true
  },
  maxDecimals :
  {
    type    : 'integer',
    default : 2
  },
  unit :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  }
}

module.exports = dto
