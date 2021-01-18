const dto = {
  id :
  {
    type        : 'string',
    'not-empty' : true
  },
  type :
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
