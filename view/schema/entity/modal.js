const dto = {
  '@meta' :
  {
    extends : 'ui'
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
  confirmButton :
  {
    type        : 'string',
    'not-empty' : true
  }
}

module.exports = dto
