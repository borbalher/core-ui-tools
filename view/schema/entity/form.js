const dto = {
  '@meta' :
  {
    extends : 'ui'
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
