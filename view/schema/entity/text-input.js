const dto = {
  '@meta' :
  {
    extends : 'input'
  },
  autocomplete :
  {
    type    : 'boolean',
    default : false
  },
  maxLength :
  {
    type     : 'integer',
    optional : true
  },
  placeholder :
  {
    type     : 'string',
    optional : true
  },
  regexp :
  {
    type     : 'regexp',
    optional : true
  }
}

module.exports = dto
