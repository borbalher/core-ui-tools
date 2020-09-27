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
  state :
  {
    type    : 'json',
    default : {}
  },
  wrapper :
  {
    type        : 'string',
    'not-empty' : true,
    default     : 'div'
  },
  props :
  {
    type       : 'schema',
    schema     : 'value-object/props',
    collection : true,
    default    : []
  },

  // renderonchange :
  // {
  //   type    : 'boolean',
  //   default : true
  // },
  // attribute :
  // {
  //   optional    : true,
  //   type        : 'string',
  //   'not-empty' : true
  // },
  // bindings : // TODO
  // {
  //   type       : 'schema',
  //   collection : true,
  //   default    : [],
  //   schema     : 'value-object/binding'
  // },
  // listeners :
  // {
  //   type       : 'schema',
  //   collection : true,
  //   default    : [],
  //   schema     : 'value-object/listener'
  // },
  // options :
  // {
  //   type     : 'json',
  //   optional : true
  // },
}
