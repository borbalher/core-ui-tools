const dto = {
  '@meta' :
  {
    extends : 'component'
  },
  buttonText :
  {
    type        : 'string',
    'not-empty' : true,
    default     : 'Logout'
  }
}

module.exports = dto
