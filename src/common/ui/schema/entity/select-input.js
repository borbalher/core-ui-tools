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
    schema     : 'value-object/reference',
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
