module.exports = {
  core :
  {
    component :
    {
      'select-input' :
      {
        listeners : [
          {
            event   : 'input.value.setted',
            locator : 'select-input/command/validate-input-value'
          },
          {
            event   : 'validate.input',
            locator : 'select-input/command/validate-input-value'
          },
          {
            event   : 'set.input',
            locator : 'select-input/command/set-input-value'
          }
        ],
        bindings : [
          {
            selector : '.input-group__input',
            domEvent : 'blur',
            map      : 'set.input',
            mapper   : 'select-input/mapper/selected-options-to-value'
          },
          {
            selector : '.input-group__input',
            domEvent : 'change',
            map      : 'set.input',
            mapper   : 'select-input/mapper/selected-options-to-value'
          }
        ]
      }
    },
    locator :
    {
      'select-input/mapper/selected-options-to-value' : `${__dirname}/mapper/selected-options-to-value`,
      'select-input/command/set-input-value'          : `${__dirname}/listener/set-input-value`,
      'select-input/command/validate-input-value'     : `${__dirname}/listener/validate-input-value`,
      'ui/select-input'                               : __dirname
    }
  }
}
