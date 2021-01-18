const dto = {
  '@meta' :
  {
    extends : 'entity/input-group'
  },
  value :
  {
    type    : 'boolean',
    default : false
  }
}

module.exports = class
{
  locate()
  {
    return dto
  }
}
