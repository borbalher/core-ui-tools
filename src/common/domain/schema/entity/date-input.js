const dto = {
  '@meta' :
  {
    extends : 'entity/input'
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
