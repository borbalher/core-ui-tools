const dto = {
  selector :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  domEvent :
  {
    type        : 'string',
    'not-empty' : true
  },
  locator :
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
  dispatch :
  {
    type    : 'boolean',
    default : false
  },
  domEventMapper :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  preventDefault :
  {
    type    : 'boolean',
    default : false
  },
  stopPropagation :
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
