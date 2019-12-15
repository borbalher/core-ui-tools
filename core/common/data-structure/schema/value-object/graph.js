module.exports = {
  isDirected :
  {
    type    : 'boolean',
    default : false
  },
  nodes :
  {
    type       : 'schema',
    schema     : 'data-structure/node',
    collection : true,
    default    : []
  },
  edges :
  {
    type       : 'schema',
    schema     : 'data-structure/edge',
    collection : true,
    default    : []
  }
}
