const dto = {
  id :
  {
    type        : 'string',
    'not-empty' : true
  },
  name :
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
