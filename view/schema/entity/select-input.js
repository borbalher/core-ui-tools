module.exports = {
  '@meta' : {
    extends : 'input'
  },
  autocomplete :
  {
    type    : 'boolean',
    default : false
  },
  size :
  {
    type     : 'integer',
    min      : 1,
    optional : true
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
