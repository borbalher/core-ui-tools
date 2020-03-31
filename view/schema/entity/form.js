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
  submit :
  {
    type     : 'string',
    optional : true,
    default  : 'Submit'
  },
  reset :
  {
    type     : 'string',
    optional : true,
    default  : 'Reset'
  },
  data :
  {
    type    : 'json',
    default : {}
  }
}

module.exports = dto
