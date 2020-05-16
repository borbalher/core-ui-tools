
module.exports = {
  id :
  {
    type        : 'string',
    'not-empty' : true
  },
  foo :
  {
    type       : 'schema',
    schema     : 'entity/foo',
    collection : true,
    default    : []
  },
  bar :
  {
    type   : 'schema',
    schema : 'entity/bar'
  },
  baz :
  {
    type   : 'schema',
    schema : 'value-object/baz'
  }
}
