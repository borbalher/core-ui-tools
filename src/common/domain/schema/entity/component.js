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
  renderOnChange :
  {
    type    : 'boolean',
    default : true
  }
}
