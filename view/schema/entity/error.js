const dto = {
  '@meta' :
  {
    inmutable : false,
    extends   : 'component'
  },
  classList :
  {
    type        : 'string',
    collection  : true,
    optional    : true,
    enum        : ['input-group__error'],
    default     : ['input-group__error']
  },
  hasError :
  {
    type    : 'boolean',
    default : false
  },
  message :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : false
  }
}

module.exports = dto
