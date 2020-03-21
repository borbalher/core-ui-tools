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
  canBeEmpty :
  {
    type     : 'boolean',
    optional : true,
    default  : false
  }
  // TODO add regexp support
}

module.exports = dto
