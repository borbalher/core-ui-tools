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
  }
}
