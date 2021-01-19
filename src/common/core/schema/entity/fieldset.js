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
}

module.exports = dto
