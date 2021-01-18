const dto = {
  context :
  {
    type     : 'json',
    optional : true
  },
  template :
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
