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
    schema : 'value-object/reference'
  },
  fieldset :
  {
    type   : 'schema',
    schema : 'value-object/reference'
  }
}
