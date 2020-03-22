module.exports = {
  core :
  {
    component :
    {
      'number-input' :
      {
        listeners : [
          {
            event   : 'input.data.setted',
            locator : 'number-input/command/validate-input-data'
          },
          {
            event   : 'validate.input.data',
            locator : 'number-input/command/validate-input-data'
          },
          {
            event   : 'set.input.data',
            locator : 'number-input/command/set-input-data'
          }
        ],
        bindings : [
          {
            selector : '.number-input__input',
            domEvent : 'blur',
            map      : 'set.input.data',
            mapper   : 'input/mapper/input-data-mapper'
          }
        ]
      }
    },
    locator :
    {
      'number-input/command/set-input-data'      : `${__dirname}/listener/set-input-data`,
      'number-input/command/validate-input-data' : `${__dirname}/listener/validate-input-data`,
      'ui/number-input'                          : __dirname
    }
  }
}
