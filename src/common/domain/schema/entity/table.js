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
    schema     : 'entity/component',
    collection : true,
    default    : []
  },
  rows :
  {
    type       : 'schema',
    schema     : 'entity/component',
    collection : true,
    default    : []
  },
  actions :
  {
    type       : 'schema',
    schema     : 'entity/component',
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
