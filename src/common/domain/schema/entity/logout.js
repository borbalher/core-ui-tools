const dto = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  text :
  {
    type        : 'string',
    'not-empty' : true,
    default     : 'Logout'
  }
}

module.exports = dto
