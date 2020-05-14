module.exports  = {
  '@meta' :
  {
    extends : 'entity/component'
  },
  showWhenToggled :
  {
    type    : 'boolean',
    default : true
  },
  isToggled :
  {
    type    : 'boolean',
    default : false
  },
  toggle :
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
