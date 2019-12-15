module.exports = {
  core :
  {
    component :
    {
      'button-group-input' :
      {
        listeners : [
          {
            event   : 'input.value.setted',
            locator : 'button-group-input/command/validate-input-value'
          },
          {
            event   : 'validate.input',
            locator : 'button-group-input/command/validate-input-value'
          },
          {
            event   : 'set.input',
            locator : 'button-group-input/command/set-input-value'
          }
        ],
        bindings : [
          {
            selector : '.input-group__input',
            domEvent : 'blur',
            map      : 'set.input',
            mapper   : 'button-group-input/mapper/selected-options-to-value'
          },
          {
            selector : '.input-group__input',
            domEvent : 'change',
            map      : 'set.input',
            mapper   : 'button-group-input/mapper/selected-options-to-value'
          }
        ]
      }
    },
    locator :
    {
      'button-group-input/mapper/selected-options-to-value' : `${__dirname}/mapper/selected-options-to-value`,
      'button-group-input/command/set-input-value'          : `${__dirname}/listener/set-input-value`,
      'button-group-input/command/validate-input-value'     : `${__dirname}/listener/validate-input-value`,
      'ui/button-group-input'                               : __dirname
    }
  }
}
