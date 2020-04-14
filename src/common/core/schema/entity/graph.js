module.exports = {
  isDirected :
  {
    type    : 'boolean',
    default : false
  },
  nodes :
  {
    type       : 'node',
    collection : true,
    default    : []
  },
  edges :
  {
    type       : 'edge',
    collection : true,
    default    : []
  }
}
