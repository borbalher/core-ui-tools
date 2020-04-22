module.exports = {
  '@meta' :
  {
    extends : 'node'
  },
  template :
  {
    type        : 'string',
    'not-empty' : false
  },
  schema :
  {
    type        : 'string',
    'not-empty' : false
  },
  renderOnChange :
  {
    type    : 'boolean',
    default : true
  }
}
