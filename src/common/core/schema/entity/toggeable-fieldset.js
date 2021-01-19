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
  isVisible :
  {
    type    : 'boolean',
    default : false
  },
  toggle :
  {
    type   : 'schema',
    schema : 'entity/checkbox-input-group'
  },
  label :
  {
    type        : 'string',
    optional    : true,
    'not-empty' : true
  },
  formId :
  {
    type        : 'string',
    'not-empty' : true,
    optional    : true
  }
}
