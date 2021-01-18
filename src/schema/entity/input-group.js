const dto = {
  '@meta' :
  {
    extends : 'entity/input'
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

module.exports = class
{
  locate()
  {
    return dto
  }
}

