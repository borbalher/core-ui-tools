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
  }// TODO add wrapper classList
}

module.exports = dto
