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
  eventMapper :
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
    default : true
  }
  // emitTo
}

module.exports = dto
