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
  showHeader :
  {
    type    : 'boolean',
    default : false
  },
  panelColspan :
  {
    type     : 'integer',
    optional : true
  },
  headers :
  {
    type       : 'schema',
    schema     : 'value-object/table-header',
    collection : true,
    default    : []
  },
  rows :
  {
    type       : 'schema',
    schema     : 'value-object/table-data',
    collection : true,
    default    : []
  },
  panels :
  {
    type       : 'schema',
    schema     : 'value-object/table-panel',
    collection : true,
    default    : []
  }
}
