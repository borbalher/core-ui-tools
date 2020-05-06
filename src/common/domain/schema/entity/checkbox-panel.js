module.exports  = {
  '@meta' :
  {
    extends : 'entity/form'
  },
  showWhenFalse :
  {
    type    : 'boolean',
    default : false
  },
  showPanel :
  {
    type   : 'schema',
    schema : 'entity/checkbox-input-group'
  },
  panel :
  {
    type   : 'schema',
    schema : 'entity/component'
  }
}
