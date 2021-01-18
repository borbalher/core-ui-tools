const dto = {
  source :
  {
    type        : 'string',
    'not-empty' : true
  },
  target :
  {
    type        : 'string',
    'not-empty' : true
  },
  payload :
  {
    type : 'json'
  }
}

module.exports = class
{
  locate()
  {
    return dto
  }
}
