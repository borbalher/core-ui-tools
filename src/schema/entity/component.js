const dto = {
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
    schema     : 'value/binding'
  },
  listeners :
  {
    type       : 'schema',
    collection : true,
    default    : [],
    schema     : 'value/listener'
  },
  options :
  {
    type     : 'json',
    optional : true
  },
  datasets :
  {
    type       : 'schema',
    schema     : 'value/dataset',
    collection : true,
    default    : []
  }
}

module.exports = class
{
  locate()
  {
    return dto
  }
}
