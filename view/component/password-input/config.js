module.exports = {
  core :
  {
    component :
    {
      'password-input' :
      {
        listeners : [
          {
            event   : 'input.value.setted',
            locator : 'password-input/command/validate-input-value'
          },
          {
            event   : 'validate.input',
            locator : 'password-input/command/validate-input-value'
          },
          {
            event   : 'set.input',
            locator : 'password-input/command/set-input-value'
          }
        ],
        bindings : [
          {
            selector : '.input-group__input',
            domEvent : 'blur',
            map      : 'set.input',
            mapper   : 'input/mapper/input-value-mapper'
          }
        ]
      }
    },
    locator :
    {
      'password-input/command/set-input-value'      : `${__dirname}/listener/set-input-value`,
      'password-input/command/validate-input-value' : `${__dirname}/listener/validate-input-value`,
      'ui/password-input'                           : __dirname
    }
  }
}
