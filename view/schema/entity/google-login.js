const dto = {
  '@meta' :
  {
    extends : 'component'
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

module.exports = dto
