const dto = {
  '@meta' :
  {
    extends : 'ui'
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
