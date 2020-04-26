module.exports = {
  '@meta' : {
    extends : 'entity/input'
  },
  buttons :
  {
    type       : 'schema',
    schema     : 'entity/button-group-button',
    collection : true,
    default    : []
  }
}
