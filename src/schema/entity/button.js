const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  text :
  {
    type        : 'string',
    'not-empty' : true
  }
}

module.exports = class
{
  locate()
  {
    return dto
  }
}
