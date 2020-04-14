module.exports = {
  '@meta' :
  {
    immutable : false,
    extends   : 'graph'
  },
  isDirected :
  {
    type    : 'boolean',
    enum    : [true],
    default : true
  },
  root :
  {
    type     : 'string',
    optional : true
  }
}
