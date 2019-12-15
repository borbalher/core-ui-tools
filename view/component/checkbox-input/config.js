
module.exports = {
  core :
  {
    component :
    {
      'checkbox-input' :
      {
        listeners : [
          {
            event   : 'input.value.setted',
            locator : 'checkbox-input/command/validate-input-value'
          },
          {
            event   : 'validate.input',
            locator : 'checkbox-input/command/validate-input-value'
          },
          {
            event   : 'set.input',
            locator : 'checkbox-input/command/set-input-value'
          }
        ],
        bindings : [
          {
            selector : '.checkbox__input',
            domEvent : 'change',
            map      : 'set.input',
            mapper   : 'checkbox-input/mapper/checked-to-value'
          }
        ]
      }
    },
    locator :
    {
      'checkbox-input/mapper/checked-to-value'      : `${__dirname}/listener/checked-to-value`,
      'checkbox-input/command/set-input-value'      : `${__dirname}/listener/set-input-value`,
      'checkbox-input/command/validate-input-value' : `${__dirname}/listener/validate-input-value`,
      'ui/checkbox-input'                           : __dirname
    }
  }
}
