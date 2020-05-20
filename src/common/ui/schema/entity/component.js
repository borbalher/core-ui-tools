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
  bindings : // TODO
  {
    type          : 'custom-json',
    'custom-json' :
    {
      type    : 'schema',
      options :
      {
        schema : 'value-object/binding'
      }
    }
  },
  listeners :
  {
    type          : 'custom-json',
    'custom-json' :
    {
      type    : 'schema',
      options :
      {
        schema : 'value-object/listener'
      }
    }
  },
  options :
  {
    type     : 'json',
    optional : true
  }
}
