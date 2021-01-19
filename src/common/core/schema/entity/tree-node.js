module.exports = {
  '@meta' :
  {
    extends : 'entity/node'
  },
  parentId :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  }
}
