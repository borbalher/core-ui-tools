module.exports = {
  '@meta' :
  {
    extends : [
      'data-structure/tree'
    ]
  },
  nodes :
  {
    type       : 'schema',
    schema     : 'entity/component',
    collection : true,
    default    : []
  },
  // edges :
  // {
  //   type       : 'schema',
  //   schema     : 'value-object/edge',
  //   collection : true,
  //   default    : []
  // }
}