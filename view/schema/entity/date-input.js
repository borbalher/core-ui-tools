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
  placeholder :
  {
    type     : 'string',
    optional : true
  }
}

module.exports = dto
