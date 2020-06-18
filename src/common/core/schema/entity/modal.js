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
    schema     : 'entity/modal-action',
    collection : true,
    default    : []
  }
}

module.exports = dto
