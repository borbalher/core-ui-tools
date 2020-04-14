const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  buttonText :
  {
    type        : 'string',
    'not-empty' : true,
    default     : 'Logout'
  }
}

module.exports = dto
