const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  isBlocked :
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
