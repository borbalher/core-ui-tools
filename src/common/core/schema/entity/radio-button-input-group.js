module.exports = {
  '@meta' : {
    extends : 'entity/input-group'
  },
  value :
  {
    type     : 'string',
    optional : true
  },
  buttons :
  {
    type       : 'schema',
    schema     : 'entity/radio-button-input',
    collection : true,
    default    : []
  }
}
