module.exports = {
  '@meta' :
  {
    extends : 'entity/component'
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
