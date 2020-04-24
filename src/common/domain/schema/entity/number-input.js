const dto = {
  '@meta' :
  {
    extends : 'entity/input'
  },
  placeholder :
  {
    type     : 'string',
    optional : true
  },
  max :
  {
    type     : 'integer',
    optional : true
  },
  min :
  {
    type     : 'integer',
    optional : true
  },
  step :
  {
    type     : 'integer',
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
