module.exports = {
  '@meta' : {
    extends : 'input'
  },
  autocomplete :
  {
    type    : 'boolean',
    default : false
  },
  canUnselect :
  {
    type    : 'boolean',
    default : true
  },
  multiple :
  {
    type    : 'boolean',
    default : false
  },
  items :
  {
    type       : 'schema',
    schema     : 'select-input-item',
    collection : true,
    default    : []
  },
  placeholder :
  {
    type     : 'string',
    optional : true
  }
}
