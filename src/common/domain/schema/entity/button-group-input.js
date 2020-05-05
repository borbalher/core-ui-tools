module.exports = {
  '@meta' : {
    extends : 'entity/input'
  },
  selectedButton :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  },
  buttons :
  {
    type       : 'schema',
    schema     : 'entity/button-group-button',
    collection : true,
    default    : []
  }
}
