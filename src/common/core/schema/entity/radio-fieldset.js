const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  fieldsets :
  {
    type        : 'string',
    'not-empty' : true,
    collection  : true,
    default     : []
  },
  selectedFieldset :
  {
    type        : 'string',
    'not-empty' : true
  },
  defaultFieldset :
  {
    type        : 'string',
    'not-empty' : true
  }
}

module.exports = dto
