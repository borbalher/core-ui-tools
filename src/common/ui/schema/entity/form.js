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
  },
  disabled :
  {
    type    : 'boolean',
    default : false
  }
  // inputs :
  // {
  //   type       : 'schema',
  //   schema     : 'value-object/reference',
  //   collection : true,
  //   default    : []
  // },
  // fieldsets :
  // {
  //   type       : 'schema',
  //   schema     : 'value-object/reference',
  //   collection : true,
  //   default    : []
  // }
}

module.exports = dto
