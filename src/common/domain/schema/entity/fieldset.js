const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  legend :
  {
    type     : 'string',
    optional : true
  },
  disabled :
  {
    type    : 'boolean',
    default : false
  },
  formId :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  }
  // inputs :
  // {
  //   type       : 'schema',
  //   schema     : 'value-object/reference',
  //   collection : true,
  //   default    : []
  // }
}

module.exports = dto
