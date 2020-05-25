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
    schema     : 'value/partial',
    collection : true,
    default    : []
  },
  rows :
  {
    type       : 'json',
    collection : true,
    default    : []
  },
  actions :
  {
    type       : 'schema',
    schema     : 'value/partial',
    collection : true,
    default    : []
  },
  panels :
  {
    type       : 'schema',
    schema     : 'entity/component',
    collection : true,
    default    : []
  }
}
