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
  lang :
  {
    type        : 'string',
    'not-empty' : true,
    default     : 'en'
  },
  script :
  {
    type       : 'string',
    collection : true,
    default    : []
  },
  css :
  {
    type       : 'string',
    collection : true,
    default    : []
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
  },
  classes :
  {
    optional    : true,
    type        : 'string',
    'not-empty' : true
  }
}
