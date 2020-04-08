const dto = {
  '@meta' :
  {
    extends : 'ui'
  },
  buttonText :
  {
    type        : 'string',
    'not-empty' : true,
    default     : 'Logout'
  }
}

module.exports = dto
