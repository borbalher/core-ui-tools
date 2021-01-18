const dto = {
  '@meta' :
  {
    extends : 'entity/node'
  },
  buttonText :
  {
    type        : 'string',
    'not-empty' : true,
    default     : 'Google login'
  },
  authURI :
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

