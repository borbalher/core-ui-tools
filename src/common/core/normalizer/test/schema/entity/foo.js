
module.exports = {
  id :
  {
    type        : 'string',
    'not-empty' : true
  },
  value :
  {
    type        : 'string',
    'not-empty' : true
  },
  bar :
  {
    type   : 'schema',
    schema : 'entity/bar'
  }
}
