module.exports = {
  core :
  {
    component :
    {
      'date-input' :
      {
        listeners : [
          {
            event   : 'input.value.setted',
            locator : 'date-input/command/validate-input-value'
          },
          {
            event   : 'validate.input',
            locator : 'date-input/command/validate-input-value'
          },
          {
            event   : 'set.input',
            locator : 'date-input/command/set-input-value'
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
      'date-input/command/set-input-value'      : `${__dirname}/listener/set-input-value`,
      'date-input/command/validate-input-value' : `${__dirname}/listener/validate-input-value`,
      'ui/date-input'                           : __dirname
    }
  }
}
