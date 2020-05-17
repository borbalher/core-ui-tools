module.exports = {
  '@meta' :
  {
    extends : 'tree-node'
  },
  template :
  {
    type        : 'string',
    'not-empty' : true
  },
  schema :
  {
    type        : 'string',
    'not-empty' : true
  },
  renderonchange :
  {
    type    : 'boolean',
    default : true
  },
  classes :
  {
    optional    : true,
    type        : 'string',
    'not-empty' : true
  },
  bindings :
  {
    type       : 'schema',
    schema     : 'value-object/binding',
    collection : true
  },
  listeners :
  {
    type       : 'schema',
    schema     : 'value-object/listener',
    collection : true
  }
}
