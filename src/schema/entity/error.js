const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  code :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  },
  message :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  }
}

module.exports = class
{
  locate()
  {
    return dto
  }
}

