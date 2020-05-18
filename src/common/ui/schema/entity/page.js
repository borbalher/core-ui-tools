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
  classes :
  {
    optional    : true,
    type        : 'string',
    'not-empty' : true
  }
}
