module.exports = {
  '@meta' : {
    extends : 'entity/input'
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
