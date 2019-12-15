const dto = {
  '@meta' :
  {
    extends : 'component'
  },
  title :
  {
    type     : 'string',
    optional : true
  },
  body :
  {
    type   : 'schema',
    schema : 'component'
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
