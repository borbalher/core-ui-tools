const dto = {
  '@meta' : {
    extends : 'entity/node'
  },
  submit :
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
