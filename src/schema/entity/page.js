const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  title :
  {
    type        : 'string',
    'not-empty' : true
  },
  lang :
  {
    type        : 'string',
    'not-empty' : true
  },
  script :
  {
    type       : 'string',
    collection : true,
    default    : []
  },
  css :
  {
    type       : 'string',
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
