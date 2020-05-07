const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  headerText :
  {
    type     : 'string',
    optional : true
  },
  isOpen :
  {
    type    : 'boolean',
    default : false
  },
  actions :
  {
    type       : 'schema',
    schema     : 'modal-action',
    collection : true,
    default    : []
  },
  submitButton :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  body :
  {
    type   : 'schema',
    schema : 'entity/component'
  }
}

module.exports = dto
