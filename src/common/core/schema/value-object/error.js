const dto = {
  code :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  },
  message :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  }
}

module.exports = dto
