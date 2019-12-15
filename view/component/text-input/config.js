module.exports = {
  core :
  {
    component :
    {
      'text-input' :
      {
        listeners : [
          {
            event   : 'input.value.setted',
            locator : 'text-input/command/validate-input-value'
          },
          {
            event   : 'validate.input',
            locator : 'text-input/command/validate-input-value'
          },
          {
            event   : 'set.input',
            locator : 'text-input/command/set-input-value'
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
      'text-input/command/set-input-value'      : `${__dirname}/listener/set-input-value`,
      'text-input/command/validate-input-value' : `${__dirname}/listener/validate-input-value`,
      'ui/text-input'                           : __dirname
    }
  }
}
