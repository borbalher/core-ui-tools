const dto = {
  channel :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  event :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  eventMapper :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  map :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  locator :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  dispatch :
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
