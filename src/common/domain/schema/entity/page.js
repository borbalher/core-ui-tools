module.exports = {
  '@meta' :
  {
    extends : 'node'
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
  lang :
  {
    type        : 'string',
    'not-empty' : true,
    default     : 'en'
  }
}
