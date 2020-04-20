module.exports = {
  '@meta' : {
    extends : 'entity/input'
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
    schema     : 'entity/select-input-item',
    collection : true,
    default    : []
  },
  value :
  {
    type       : 'string',
    optional   : true,
    collection : true,
    default    : []
  },
  placeholder :
  {
    type     : 'string',
    optional : true
  }
}
