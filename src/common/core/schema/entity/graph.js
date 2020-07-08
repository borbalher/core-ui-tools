module.exports = {
  id :
  {
    type        : 'string',
    'not-empty' : false
  },
  isDirected :
  {
    type    : 'boolean',
    default : false
  },
  nodes :
  {
    type       : 'schema',
    schema     : 'entity/node',
    collection : true,
    default    : []
  },
  edges :
  {
    type       : 'schema',
    schema     : 'value-object/edge',
    collection : true,
    default    : []
  }
}
