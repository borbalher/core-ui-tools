const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  title :
  {
    type     : 'string',
    optional : true
  },
  isValid :
  {
    type    : 'boolean',
    default : false
  },
  data :
  {
    type    : 'json',
    default : {}
  }
}

module.exports = dto
