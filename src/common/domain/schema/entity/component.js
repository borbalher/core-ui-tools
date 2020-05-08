module.exports = {
  // '@meta' :
  // {
  //   extends : 'node'
  // },
  id :
  {
    type        : 'string',
    'not-empty' : true
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
