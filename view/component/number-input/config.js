module.exports = {
  core :
  {
    component :
    {
      'number-input' :
      {
        listeners : [
          {
            event   : 'input.value.setted',
            locator : 'number-input/command/validate-input-value'
          },
          {
            event   : 'validate.input',
            locator : 'number-input/command/validate-input-value'
          },
          {
            event   : 'set.input',
            locator : 'number-input/command/set-input-value'
          }
        ],
        bindings : [
          {
            selector : '.number-input__input',
            domEvent : 'blur',
            map      : 'set.input',
            mapper   : 'input/mapper/input-value-mapper'
          }
        ]
      }
    },
    locator :
    {
      'number-input/command/set-input-value'      : `${__dirname}/listener/set-input-value`,
      'number-input/command/validate-input-value' : `${__dirname}/listener/validate-input-value`,
      'ui/number-input'                           : __dirname
    }
  }
}
