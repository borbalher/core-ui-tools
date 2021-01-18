const dto = {
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

module.exports = class
{
  locate()
  {
    return dto
  }
}
