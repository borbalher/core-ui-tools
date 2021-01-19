module.exports = {
  '@meta' :
  {
    extends : 'entity/tree-node'
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
  bindings : // TODO
  {
    type       : 'schema',
    collection : true,
    default    : [],
    schema     : 'value-object/binding'
  },
  listeners :
  {
    type       : 'schema',
    collection : true,
    default    : [],
    schema     : 'value-object/listener'
  },
  options :
  {
    type     : 'json',
    optional : true
  },
  datasets :
  {
    type       : 'schema',
    schema     : 'value-object/dataset',
    collection : true,
    default    : []
  }
}
