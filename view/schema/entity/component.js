const dto = {
  '@meta' :
  {
    extends : 'data-structure/node'
  },
  schema :
  {
    type        : 'string',
    'not-empty' : false
  },
  template :
  {
    type        : 'string',
    'not-empty' : false
  },
  bind :
  {
    type    : 'boolean',
    default : true
  },
  wrapper :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : false,
    default     : 'div'
  },
  classList :
  {
    type        : 'string',
    collection  : true,
    optional    : true,
    'not-empty' : false,
    default     : []
  }
}

module.exports = dto
