module.exports = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  hasActions :
  {
    type    : 'boolean',
    default : false
  },
  formatted :
  {
    type    : 'boolean',
    default : false
  },
  condensed :
  {
    type    : 'boolean',
    default : false
  },
  isExpandable :
  {
    type    : 'boolean',
    default : false
  },
  showHeaders :
  {
    type    : 'boolean',
    default : true
  },
  panelColspan :
  {
    type     : 'integer',
    optional : true
  },
  headers :
  {
    type       : 'schema',
    schema     : 'value-object/partial',
    collection : true,
    default    : []
  },
  rows :
  {
    type                 : 'collection',
    'collection-type'    : 'collection',
    'collection-options' :
    {
      'collection-type'    : 'schema',
      'collection-options' :
      {
        schema : 'value-object/partial'
      }
    },
    default : []
  },
  actions :
  {
    type       : 'schema',
    schema     : 'value-object/partial',
    collection : true,
    default    : []
  },
  panels :
  {
    type       : 'schema',
    schema     : 'value-object/partial',
    collection : true,
    default    : []
  }
}
