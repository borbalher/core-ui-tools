const dto = {
  '@meta' :
  {
    extends : 'component'
  },
  headerText :
  {
    type     : 'string',
    optional : true
  },
  body :
  {
    type   : 'schema',
    schema : 'component'
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
