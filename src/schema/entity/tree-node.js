const dto = {
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

module.exports = class
{
  locate()
  {
    return dto
  }
}
