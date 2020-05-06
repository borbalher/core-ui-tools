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
    schema : 'entity/checkbox-input'
  },
  panel :
  {
    type   : 'schema',
    schema : 'value-object/partial'
  }
}
