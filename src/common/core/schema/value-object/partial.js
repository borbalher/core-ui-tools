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

module.exports = dto
